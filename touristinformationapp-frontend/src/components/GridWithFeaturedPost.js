import React from "react";
import { Container, ContentWithPaddingXl } from "./misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import { SectionHeading, Subheading as SubheadingBase } from "./misc/Headings";
import { SectionDescription } from "./misc/Typography";

const Posts = tw.div`flex flex-wrap -mr-3 relative`;
const Post = tw.a`flex flex-col h-full bg-gray-200 rounded`;
const PostImage = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`h-64 sm:h-80 bg-center bg-cover rounded-t`}
`;
const PostText = tw.div`flex-1 px-6 py-8` 
const PostTitle = tw.h6`font-bold group-hocus:text-blue-500 transition duration-300 `;
const PostDescription = tw.p``;

const PostContainer = styled.div`
  ${tw`relative z-20  sm:pt-3 pr-3 w-full sm:w-1/2 lg:w-1/3 max-w-sm mx-auto sm:max-w-none sm:mx-0`}

  ${props => props.featured && css`
    ${tw`w-full sm:w-full lg:w-2/3`}
    ${Post} {
      ${tw`sm:flex-row items-center sm:pr-3`}
    }
    ${PostImage} {
      ${tw`sm:h-80 sm:min-h-full w-full sm:w-1/2 rounded-t sm:rounded-t-none sm:rounded-l`}
    }
    ${PostText} {
      ${tw`pl-8 pr-5`}
    }
    ${PostTitle} {
      ${tw`text-2xl`}
    }
    ${PostDescription} {
      ${tw`text-sm font-semibold text-blue-400 leading-relaxed`}
    }
  `}
`;

  const posts = [
    {
      postImageSrc:
        "https://images.unsplash.com/photo-1572858234994-a324ce135863?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
      title: "Otwarty nowy szlak das",
      url: "https://reddit.com",
    },
    {
      postImageSrc:
        "https://images.unsplash.com/photo-1572858234994-a324ce135863?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
      title: "Otwarty nowy szlak dasdads",
      url: "https://reddit.com"
    },
    {
      postImageSrc:
        "https://images.unsplash.com/photo-1572858234994-a324ce135863?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
      title: "Otwarty nowy szlak ads",
      url: "https://reddit.com"
    },
    {
      postImageSrc:
        "https://images.unsplash.com/photo-1572858234994-a324ce135863?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
      title: "Otwarty nowy szlak dasasd",
      url: "https://timerse.com"
    },
    {
      postImageSrc:
        "https://images.unsplash.com/photo-1572858234994-a324ce135863?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
      title: "Otwarty nowy szlak dasd sa",
      url: "https://timerse.com"
    }
    ,
    {
      postImageSrc:
        "https://images.unsplash.com/photo-1572858234994-a324ce135863?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
      title: "Otwarty nowy szlak dasd",
      url: "https://timerse.com"
    }
  ]

const GridWithFeaturedPost = () => {
  return (
    <Container>
      <ContentWithPaddingXl>
        <Posts>
          {posts.map((post, index) => (
            <PostContainer featured={post.featured} key={index}>
              <Post className="group" href={post.url}>
                <PostImage imageSrc={post.postImageSrc} />
                <PostText>
                  <PostTitle>{post.title}</PostTitle>
                  {post.featured && <PostDescription>{post.description}</PostDescription>}
                  
                </PostText>
              </Post>
            </PostContainer>
          ))}

        </Posts>
      </ContentWithPaddingXl>
    </Container>
  );
};

export default GridWithFeaturedPost;
