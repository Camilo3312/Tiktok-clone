import React, { useState, createContext } from 'react';
import { supabase } from '../supabaseClient'

//Context
export const AppContext = createContext(null);

//Provider
export const AppProvider = ({ children }) => {
    const [showComment, setShowComment] = useState(false);

    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(null)
    const [showComments, setShowComments] = useState(false)

  const getComments = async (id_video) => {
    setComments([])
    setShowComments(true)
    setIsLoading(true)
    let { data: comments, error } = await supabase
      .from('comments')
      .select(`
        *,
        users (*)
    
    `)
      .eq('video_comment', id_video)

    await setComments(comments)
    await setIsLoading(false)
  }


  const data = {comments, isLoading, showComments, setShowComments}

  return <AppContext.Provider value={{ data, getComments }}>{children}</AppContext.Provider>;
}