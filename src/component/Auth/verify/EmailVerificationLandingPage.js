import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useVerifyEmailMutation } from '../../../features/auth/authApi';
import { EmailVerificationSuccess } from './EmailVerificationSuccess';

export const EmailVerificationLandingPage = () => {
    const { verificationString } = useParams()
    const [verifyEmail, { data, isSuccess, isLoading, error: responseError }] = useVerifyEmailMutation();
  
    useEffect(() => {
        const loadVarification = async () => {
            verifyEmail({verificationString})
        }
        loadVarification()

    }, [verificationString, verifyEmail])
     if (isLoading) return <p>Loading...</p>
    if (!isSuccess) return <p>failed...</p>
    if(data?.user?.isVerified) return <EmailVerificationSuccess/>
};
