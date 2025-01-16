import React from 'react';

export default function Page() {
  return (
    <div className='p-12 text-gray-200 mt-12 space-y-8 [&_p]:text-center'>
      <h2 className='text-2xl font-bold text-center mb-8'>
        About Kenki IMDB Clone
      </h2>
      <p className=''>
        Welcome to Kenki media This app is designed to provide users with a
        comprehensive database of movies, TV shows, and entertainment content.
        Our goal is to offer a seamless and enjoyable experience for movie
        enthusiasts and casual viewers alike. On IMDB Clone, you will find
        detailed information about your favorite movies and TV shows, including
        cast and crew details, plot summaries, user reviews, and ratings.
      </p>
      <p className=''>
        We strive to keep our database up-to-date with the latest releases and
        trending content. This website is created using Next.js and Clerk.
      </p>
      <p className=''>
        We encourage you to rate and review the movies and shows you watch. Your
        feedback helps other users discover great content and enhances the
        overall community experience. Join us in celebrating the world of
        entertainment!
      </p>
    </div>
  );
}
