'use client'
import React from 'react'
import { supabase } from '../../supabaseClient'
// import { supabase } from '../../../client'

const uploadFile = async (event) => {
    const file = event.target.files[0]
    const fileExt = file.name.split('.').pop()
    const fileName = `${Math.random()}.${fileExt}`
    const filePath = `${fileName}`

    let { error: uploadError } = await supabase.storage.from('videos-bucket').upload(filePath, file)
}

export const Button = () => {
    return (
        <input type="file" name="" id="" onChange={uploadFile} />
    )
}
