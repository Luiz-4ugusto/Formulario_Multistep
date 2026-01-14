import { useState } from "react";

export function useForm(steps){
    const[currentStep, setcurrentStep, LastStep,FirtsStep] = useState(0);

    function changeStep(i, e){
        e.preventDefault();
        if(i<0||i>=steps.length) return;
        setcurrentStep(i);

    }

    return{
        currentStep,
        currentComponent:steps[currentStep],
        changeStep,
        LastStep: currentStep+1=== steps.length ? true: false,
        FirtsStep: currentStep=== 0 ? true: false,

    };
}