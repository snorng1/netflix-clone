import Billboard from "@/components/Billboard";
import MovieList from "@/components/MovieList";
import NavBar from "@/components/NavBar";
import useMovieList from "@/hooks/useMovieList";
import usseMovieList from "@/hooks/useMovieList";
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";

export async function getServerSideProps(context: NextPageContext ) {
  const session = await getSession(context);

  if(!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      }
    }
  }

  return {
    props: {}
  }
}

export default function Home() {
  const { data: movies = [] } = useMovieList();

  return (
    <>
     <NavBar />
     <Billboard />
     <div className="pb-40">
      <MovieList title="Treding Now" data={movies}/>
     </div>
    </>
  )
}
