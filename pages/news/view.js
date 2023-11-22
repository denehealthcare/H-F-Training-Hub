import { useRouter } from 'next/router';
import Layout from "@/app/components/layout/layout";
import api from '@/app/axios/api';
import { useState, useEffect } from 'react';
import RecentPosts from '@/app/components/news/recentPosts';

export default function view(){


    const router = useRouter();
    const postParam = router.query.post;

    const [post, setPost] = useState({});
    const [categories, setCategories] = useState([]);

    useEffect(() => {

        const retrievedCategories = [];
        let retrievedPosts = {};

        async function retrievePosts() {

            try {
                // Get all categories
                await api.get('/categories')
                    .then(resp => {

                        resp.data.map(cat => {

                            retrievedCategories.push(
                                {
                                    id: cat.id,
                                    title: cat.name
                                }
                            )

                        });

                        setCategories(retrievedCategories);

                    })
                    .catch(err => {

                        console.log(err);

                    });


                //Get all posts
                await api.get(`/posts/${postParam}?_embed`)
                    .then(resp => {

                        const post = resp.data;

                        const originalDate = new Date(post.date_gmt);
                        const day = originalDate.getDate();
                        const month = originalDate.getMonth() + 1;
                        const year = originalDate.getFullYear();
                        const formattedDateString = `${day < 10 ? '0' : ''}${day}-${month < 10 ? '0' : ''}${month}-${year}`;


                        //Create each post that will be pushed
                        const retrievedPost = {
                            id: post.id,
                            title: post.title.rendered,
                            date: formattedDateString,
                            image: post._embedded["wp:featuredmedia"][0].source_url,
                            category_id: post.categories[0],
                            content: post.content.rendered
                        };



                            //Find the correct category for the post
                            retrievedCategories.map(cat => {

                                if (cat.id === retrievedPost.category_id) {

                                    retrievedPost.category = cat.title;

                                };
                            });

                            retrievedPosts = retrievedPost;



                        setPost(retrievedPosts);



                    }).catch(err => {

                        console.log(err)

                    });


            }

            catch {

                console.log('fail');

            }



        }

        retrievePosts();




    }, [postParam]);

    useEffect(() => {

        console.log(post);

    },[post]);

    return(
        <>
            <Layout>

                <div className='bg-[#ECECEC]'>


                    <div className="max-w-[1440px] m-auto pt-[50px] sm:pt-[80px] sm:pb-[80px]">
                        <div className="ps-[3vw] pe-[3vw] sm:ps-[5vw] sm:pe-[5vw] xl:ps-[162px] xl:pe-[162px]">
    
    
    
                            <div className='flex'>
    
                                <h1 className='text-[#377497] r-bold text-[1rem] border-r-4 border-[#377497] pe-2'>News</h1>
    
                                <h2 className='text-[#377497] r-bold text-[1rem] ps-2'>{post.category}</h2>
    
                            </div>
    
    
                            <h1 className='r-bold text-[2rem] sm:text-[2.5rem] text-[#656565]'>
                                {post.title}
                            </h1>
    
                            <p className='r-light'>
                                {post.date}
                            </p>
    
    
    
                            <div className='flex mt-[30px] sm:mt-[40px] lg:mt-[63px] justify-between gap-[20px]'>
    
                                <div className='col-span-2'>
    
                                    <img src={post.image} className='w-[100%] max-w-[640px]'/>
    
                                
                                    <div className='mt-[30px] lg:mt-[50px]' dangerouslySetInnerHTML={{ __html: post.content }} />
    
    
                                </div>
    
    
                                <div className='hidden lg:inline-block w-[100%] lg:min-w-[30%] xl:min-w-[35%]'>
    
                                    <RecentPosts/>
    
    
                                </div>
    
    
                            </div>
    
    
    
    
    
                        </div>
                    </div>    


                </div>

            </Layout>
        </>
    )
}