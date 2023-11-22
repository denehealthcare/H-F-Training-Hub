import Layout from "@/app/components/layout/layout";
import api from "@/app/axios/api";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function News() {

    const [posts, setPosts] = useState([]);
    const [categories, setCategories] = useState([]);

    

    useEffect(() => {

        const retrievedCategories = [];
        const retrievedPosts = [];

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
                await api.get('/posts?_embed')
                    .then(resp => {

                        console.log(resp)

                        //console.log(resp);

                        resp.data.map(post => {

                            const originalDate = new Date(post.date_gmt);
                            const day = originalDate.getDate();
                            const month = originalDate.getMonth() + 1;
                            const year = originalDate.getFullYear();

                            // Function to add ordinal suffix to the day
                            function addOrdinalSuffix(day) {
                                if (day >= 11 && day <= 13) {
                                    return `${day}th`;
                                }

                                switch (day % 10) {
                                    case 1:
                                        return `${day}st`;
                                    case 2:
                                        return `${day}nd`;
                                    case 3:
                                        return `${day}rd`;
                                    default:
                                        return `${day}th`;
                                }
                            }

                            // Add ordinal suffix to the day
                            const dayWithSuffix = addOrdinalSuffix(day);

                            // Get short month name
                            const shortMonth = originalDate.toLocaleString('default', { month: 'short' });

                            // Format the date
                            const formattedDateString = `${dayWithSuffix} ${shortMonth} ${year.toString().slice(-2)}`;

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

                                if (cat.id === retrievedPost.category_id) {

                                    retrievedPost.category = cat.title;

                                };
                            });

                            retrievedPosts.push(retrievedPost)

                        });

                        setPosts(retrievedPosts);



                    }).catch(err => {

                        console.log(err)

                    });


            }

            catch {

                console.log('fail');

            }



        }

        retrievePosts();




    }, []);



    return (
        <>
            <Layout>
                <div className="bg-[#377497] pt-[57px]">
                    <div className="max-w-[1440px] m-auto">
                        <div className="ps-[3vw] pe-[3vw] sm:ps-[5vw] sm:pe-[5vw] xl:ps-[162px] xl:pe-[162px]">

                            <h1 className=" text-white text-4xl r-bold flex justify-center items-end">Latest News</h1>

                        </div>
                    </div>
                </div>

                <div className="w-[100%] bg-[#ECECEC]">
                    <svg viewBox="0 0 1536 155" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"><path fill="#377497" d="M 0 141 C 233.7 141 545.3 110 779 110 L 779 110 L 779 0 L 0 0 Z" stroke-width="0"></path> <path fill="#377497" d="M 778 110 C 1005.4 110 1308.6 155 1536 155 L 1536 155 L 1536 0 L 778 0 Z" stroke-width="0"></path> </svg>
                </div>

                <div className="bg-[#ECECEC]">


                    <div className="max-w-[1440px] m-auto pt-[80px] pb-[80px]">
                        <div className="ps-[3vw] pe-[3vw] sm:ps-[5vw] sm:pe-[5vw] xl:ps-[162px] xl:pe-[162px]">
    
    
                            <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px] justify-center">
    
                                {posts.map(post => (
                                    <div key={post.id} className="col-span-1 max-w-[340px]">
    
                                        <Link href={`/news/view?post=${post.id}`}>
    
                                            <div className="w-[100%] flex flex-col h-[100%]">
                                                <img
                                                    src={post.image}
                                                    width="100%"
                                                    className="h-[235px]"
                                                >
                                                </img>
    
                                                <div className="bg-[#FCFCFC] border-l-2 border-b-2  border-r-2 border-[#DFDFDF]  shadow-md flex flex-col flex-1   ps-[16px] pe-[16px]">

                                                    <div className="bg-[white] relative top-[-40px] w-[100%] px-[20px] pt-[10px]">

                                                        <div className="flex justify-between">

                                                            <p className="text-[0.9rem] r-reg font-bold text-[#378C8E]">{post.category}</p>

                                                            <div className="text-[0.9rem] r-light text-[#565656] ">{post.date}</div>

                                                        </div>
    
        
                                                        <h3 className="r-reg r-bold text-[1.1rem] mt-1 text-start text-[#656565]">{post.title}</h3>
        
    
                                                    </div>
    

                                                </div>
                                            </div>
    
                                        </Link>
    
                                    </div>
    
                                ))}
    
                            </div>
    
    
                        </div>
                    </div>


                </div>

            </Layout>
        </>
    )
}