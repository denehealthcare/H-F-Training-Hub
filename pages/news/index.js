import Layout from "@/app/components/layout/layout";
import api from "@/app/axios/api";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function News(){

    const [posts, setPosts] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {

        const retrievedCategories = [];
        const retrievedPosts = [];

        async function retrievePosts() {

            try{
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
                await api.get('/posts?_embed')
                    .then(resp => {

                        console.log(resp)
                        
                        //console.log(resp);
    
                        resp.data.map(post => {

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
                            };

                            

                            //Find the correct category for the post
                            retrievedCategories.map(cat => {

                                if(cat.id === retrievedPost.category_id){

                                    retrievedPost.category = cat.title;

                                };
                            });

                            retrievedPosts.push(retrievedPost)

                        });

                        setPosts(retrievedPosts);


    
                    }).catch( err => {

                        console.log(err)

                    });


            }

            catch {

                console.log('fail');

            }



        }

        retrievePosts();




    }, []);


    const sortOptions = [


        { name: 'Most Popular', href: '#' },
        { name: 'Best Rating', href: '#' },
        { name: 'Newest', href: '#' },
    ];



    return(
        <>
            <Layout>
                <div className="bg-[#377497] py-[57px]">
                    <div className="max-w-[1440px] m-auto">
                        <div className="ps-[3vw] pe-[3vw] sm:ps-[5vw] sm:pe-[5vw] xl:ps-[162px] xl:pe-[162px]">

                            <h1 className=" text-white text-4xl r-bold">Latest News</h1>


                        </div>
                    </div>
                </div>


                <div className="max-w-[1440px] m-auto mt-[80px] mb-[80px]">
                    <div className="ps-[3vw] pe-[3vw] sm:ps-[5vw] sm:pe-[5vw] xl:ps-[162px] xl:pe-[162px]">

                        
                        <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px] justify-center">

                            {posts.map(post => (
                                <div key={post.id} className="col-span-1 max-w-[340px]">

                                    <Link href={`/news/view?post=${post.id}`}>

                                        <div className="w-[100%]">
                                            <img
                                                src={post.image}
                                                width="100%"
                                                className="h-[235px]"
                                            >
                                            </img>
    
                                            <div className="bg-[#FCFCFC] border-l-2 border-b-2 border-t-[6px] border-r-2 border-[#DFDFDF] border-t-[#378C8E] shadow-md flex flex-col  ps-[32px] pe-[32px] pt-[10px] pb-[15px]">
    
                                                <p className="text-[0.9rem] r-reg font-bold text-[#378C8E]">{post.category}</p>
    
                                                <h3 className="r-reg r-bold text-[1.1rem] mt-1 text-start text-[#656565]">{post.title}</h3>
    
                                                <div className="flex items-center gap-2 self-end mt-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" className="fill-[#378C8E]" viewBox="0 0 448 512"><path d="M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z" /></svg>
                                                    <div className="r-light">{post.date}</div>
                                                    
                                                </div>
                                                
                                            </div>
                                        </div>
    
                                    </Link>

                                </div>

                            ))}

                        </div>


                    </div>
                </div>










            </Layout>
        </>
    )
}