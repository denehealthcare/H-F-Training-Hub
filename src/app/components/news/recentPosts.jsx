import api from "@/app/axios/api";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function RecentPosts(){

    const [posts, setPosts] = useState([]);

    useEffect(() => {

        const retrievedPosts = [];

        api.get('/posts?_embed')
            .then(resp => {

                resp.data.map(post => {

                    const originalDate = new Date(post.date_gmt);
                    const day = originalDate.getDate();
                    const month = originalDate.getMonth() + 1;
                    const year = originalDate.getFullYear();
                    const formattedDateString = `${day < 10 ? '0' : ''}${day}-${month < 10 ? '0' : ''}${month}-${year}`;

                    const retrievedPost = {
                        id: post.id,
                        title: post.title.rendered,
                        date: formattedDateString,
                        image: post._embedded["wp:featuredmedia"][0].source_url,
                    };

                    retrievedPosts.push(retrievedPost);

                });


                const slicedPosts = retrievedPosts.slice(0, 4);


                setPosts(slicedPosts);


            })
            .catch(err => {

                console.log(err);
            });



    })

    


    return(
        <>
            <div className="border-b-[2px] border-[#378C8E]">
    
                <div className="bg-[#378C8E] inline-block py-[10px] px-[20px] r-bold text-[white]">
                    Recent Posts
                </div>
    
            </div>

            <div>
                <ul className="mt-5 flex flex-col gap-[20px]">
                    {posts.map(post => (
                        <Link href={`/news/view?post=${post.id}`}>
                            <li key={post.id} className="flex items-center gap-4 cursor-pointer">
                                    <img src={post.image} className="w-[100px]" />
                                    <div>
                                        <p className="r-bold text-[#656565] text-[0.8rem]">
                                            {post.title}
                                        </p>
                                        <p className="r-light text-[#656565] text-[0.7rem]">
                                            {post.date}
                                        </p>
                                    </div>
    
                            </li>
                        </Link>    
                    ))}
                </ul>

            </div>



        
        </>
    )
}