import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

const usseMovieList = () => {
    const { data, error, isLoading } = useSWR('/api/movies', fetcher, {
        revalidateIFStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    });

    return {
        data,
        error,
        isLoading
    }
};

export default usseMovieList;