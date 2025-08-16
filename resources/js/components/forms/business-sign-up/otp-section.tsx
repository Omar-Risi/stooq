import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog"

import { Button } from "@/components/ui/button";

import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp"


import { Loader2Icon } from "lucide-react";

function OtpSection({ open, setOtpOpen, data, setData, processing, handleSubmit }) {
    return (
        <AlertDialog open={open}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle> One final step </AlertDialogTitle>
                    <AlertDialogDescription>
                        We just sent you a one-time password to the email you provided! please check it out and fill it in below.
                    </AlertDialogDescription>
                </AlertDialogHeader>


                <div className="w-full grid place-content-center">
                    <InputOTP
                        name="otp"
                        maxLength={6}
                        value={data.otp}
                        onChange={(val) => setData('otp', val)}
                    >
                        <InputOTPGroup>
                            <InputOTPSlot index={0} />
                            <InputOTPSlot index={1} />
                            <InputOTPSlot index={2} />
                        </InputOTPGroup>
                        <InputOTPSeparator />
                        <InputOTPGroup>
                            <InputOTPSlot index={3} />
                            <InputOTPSlot index={4} />
                            <InputOTPSlot index={5} />
                        </InputOTPGroup>
                    </InputOTP>
                </div>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={() => setOtpOpen(false)}>Cancel</AlertDialogCancel>
                    <Button
                        disabled={data.otp.length < 6 || processing}
                        className="cursor-pointer disabled:cursor-default"
                        type="submit"
                        onClick={handleSubmit}
                    >
                        {(processing) && <Loader2Icon className="animate-spin" />}

                        Submit form
                    </Button>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog >
    )
}

export { OtpSection }

