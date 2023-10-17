"use client"
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Loader } from '@/components/ui/loader';
import { useToast } from './ui/use-toast';
import { Icons } from './icons';

const GoogleButton = () => {

    const [loading, setLoading] = useState(false)
    const { toast } = useToast()

    const handler = async () => {
        try {
            //await signInWithPopup(auth, provider)
        } catch (err) {
            /*
            toast({
                title: "Un erreur de connexion c'est produite",
                description: (err as Error).message,
                variant: "destructive"
            })
            */
        } finally {
            setLoading(false)
        }
    }

    return (
            <Button disabled={loading} className="w-full flex gap-2" onClick={() => handler()} variant="outline">
                { loading ? <Loader /> : <Icons.google className='h-4 w-4' /> } Google
            </Button>
    )
}

export default GoogleButton