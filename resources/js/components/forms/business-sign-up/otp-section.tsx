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


import { Loader2Icon, Underline } from "lucide-react";

function OtpSection({ open, setOtpOpen, data, setData, processing, handleSubmit, handleValidate }) {
    return (
        <AlertDialog open={true}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle> One final step </AlertDialogTitle>
                    <AlertDialogDescription>
                        We just sent you a one-time password to the email you provided! please check it out and fill it in below.
                    </AlertDialogDescription>
                    <div className="flex gap-2">
                        <p className="text-muted-foreground text-sm">Didn't recieve otp? </p>
                        <button
                            type="button"
                            className="
                            text-primary
                            hover:underline
                            text-sm
                            cursor-pointer
                        "
                            onClick={handleValidate}
                        >
                            click to
                            resend otp
                        </button>
                    </div>
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
                    <AlertDialogAction
                        disabled={data.otp.length < 6 || processing}
                        className="cursor-pointer disabled:cursor-default"
                        type="submit"
                        onClick={handleSubmit}
                    >
                        {(processing) && <Loader2Icon className="animate-spin" />}

                        Submit form
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog >
    )
}

export { OtpSection }

