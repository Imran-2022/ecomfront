import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useVerifyEmailMutation } from '../../../features/auth/authApi';

export const EmailVerificationLandingPage = () => {
    const [isSuccess, setSuccess] = useState(false)
    const { verificationString } = useParams()
    const [verifyEmail, { data, isLoading, error: responseError }] = useVerifyEmailMutation();
  
    useEffect(() => {
        const loadVarification = async () => {
            verifyEmail({verificationString})
        }
        loadVarification()
    }, [verificationString, verifyEmail])
    
    useEffect(()=>{
        console.log(data)
    },[data])

    // if (isLoading) return <p>Loading...</p>
    // if (!isSuccess) return <p>failed...</p>
    return <p>{verificationString}</p>
};