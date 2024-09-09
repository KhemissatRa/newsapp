import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MyContext } from './context';

const Post = () => {
  const { id } = useParams(); // Get post ID from the URL
  const { news } = useContext(MyContext); // Access the news data from context

  const [post, setPost] = useState(null);

  useEffect(() => {
  
    const foundPost = news.find(article => article.source.id === id);
    setPost(foundPost);
  }, [id, news]);

  if (!post) return
  <h1>!Post Not Found 404</h1>

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-700 mb-6">{post.description}</p>
      <img src={post.urlToImage} alt={post.title} className="w-full h-auto mb-6" />
      <p className="text-gray-600">{post.content}</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo asperiores iusto iste at quod ame
        t aut expedita repudiandae recusandae laborum fuga ut sit, soluta vel consequatur odit quaerat eveniet
         facilis. Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos eveniet, tenetur sed neq
         ue, eum totam sequi, consequatur ullam accusantium corrupti dolore provident cupiditate voluptate do
         lorem aliquid ipsa reprehenderit consequuntur quo! Lorem ipsum dolor sit amet consectetur adipisicin
         g elit. Cupiditate quia voluptatum repellat perferendis! Ad totam, minus vel qui illo minima quod an
         imi, porro laboriosam sit suscipit quasi et harum sequi? Lorem ipsum, dolor sit amet consectetur adi
         pisicing elit. Dolor quos ab modi aliquam accusamus harum corporis distinctio aut laudantium iusto e
         rror, nulla repudiandae vitae, placeat commodi? Fugit sequi non sapiente. Lorem ipsum dolor sit am
         et consectetur adipisicing elit. Iusto, quos! Facere voluptatibus quibusdam architecto, esse expedita
          nobis quisquam dolore molestiae quam possimus doloribus, optio aut reiciendis sit tempore quasi elig
          endi?Lorem ipsum dolor sit amet consectetur adipisicing elit. At ex debitis repudiandae sint ab. Lab
          ore consequuntur excepturi velit dolorum. Eius corrupti repellendus placeat quia fugit quidem possim
          us ducimus numquam eveniet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde officia v
          el ab deleniti quam explicabo vero iste rerum provident iusto minima sapiente, temporibus molestias 
          aliquid dicta numquam perspiciatis voluptatibus. Odio. Lorem ipsum dolor sit amet, consectetur adi
          pisicing elit. Illum, odio non perferendis possimus dolore repellat! Quae commodi qui exercitation
          em libero dolorum eligendi. Quis fugit suscipit fugiat distinctio, minus amet architecto. Lorem ip
          sum dolor sit amet consectetur, adipisicing elit. A maiores incidunt veritatis, maxime, eos iste a
          ssumenda laudantium eaque et cum deleniti optio dolores ad nemo hic temporibus, blanditiis id expe
          dita? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut facilis iste officiis beatae? Qu
          o repellendus quis, excepturi deleniti impedit nihil. Cumque exercitationem quas unde architecto r
          eprehenderit labore quasi neque quam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Am
          et suscipit, dolor nesciunt molestias officiis modi ullam fugiat odio voluptates quia nostrum mole
          stiae voluptatem, dolores distinctio repellat nulla eos. Nisi, veritatis? Lorem ipsum dolor sit 
           consectetur adipisicing elit. Ipsa dolores maxime explicabo ducimus cum nihil nemo esse, autem 
            nisi cupiditate porro pariatur distinctio incidunt quisquam voluptatem neque tenetur iure? Lorem
             ipsum dolor, sit amet consectetur adipisicing elit. Possimus perspiciatis maiores magnam evenie
             t itaque a. Dignissimos nihil a voluptates corporis nobis modi aspernatur ea numquam repudianda
             e repellat? Earum, incidunt iusto. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dig
             nissimos, inventore totam? Sapiente optio minus, aliquid vel aspernatur totam eum deserunt id, 
             voluptate itaque repellendus rerum inventore dignissimos quasi consectetur illo. Lorem ipsum do
             lor sit amet consectetur, adipisicing elit. Facilis, ab! Vero veritatis enim ab quia repellat expedita? Vitae harum blanditiis commodi aliquid inventore repudiandae, non saepe, tempora quasi velit magni. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt in aliquid id maxime sed nesciunt eligendi, corporis placeat itaque dolor maiores laborum nam ab ut alias obcaecati aliquam qui nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem facilis voluptates accusamus expedita voluptatem numquam fugit recusandae natus omnis maiores ad nesciunt qui facere assumenda nobis, voluptatum suscipit eligendi ab. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit aperiam facilis, ea, ab, nostrum perspiciatis distinctio eos eius illo ducimus laudantium. Dolorem eos similique id exercitationem rerum vero voluptatibus tempore.</p>
      
               
    </div>
  );
};

export default Post;
