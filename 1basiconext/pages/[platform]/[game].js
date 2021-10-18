import React from 'react';
import {useRouter} from 'next/router'


export default function Game() {
    const router =useRouter();
    console.log(router)
    console.log(router.query)
    console.log(router.query.game)

    const {game, platform}=router.query;

    return (
        <div>
            <h1>Estamos en {game} plataforma: {platform}</h1>
        </div>
    )
}
