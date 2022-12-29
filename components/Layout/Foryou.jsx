import React from 'react'
import { supabase } from '../../supabaseClient'
import { Videos } from '../UI/Videos';
import { Comments } from 'components/Layout/Comments';
import { Footer } from './Footer';

export const Foryou = async () => {

    let { data: videos, error } = await supabase
        .from('videos')
        .select(`
        *,
        users (
            *
        ),
        songs (
            *
        )
    `)



    // await console.log(videos);

    return (
        <>
            <section className='for_you'>
                {
                    videos?.map((item, index) => (
                        <>
                            <Videos key={item.id} video={item} />
                        </>
                    ))
                }

            </section>

        </>


    )
}
