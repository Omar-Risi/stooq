import { usePage, router } from '@inertiajs/react'
import { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export function TermsAndConditions() {
    const { props }: any = usePage()
    const [isAgreed, setIsAgreed] = useState(props.is_agreed_to_terms)

    const acceptTerms = () => {
        router.post('/accept-terms', {}, {
            onSuccess: () => setIsAgreed(true)
        })
    }

    return (
        <Dialog open={!isAgreed}>
            <DialogContent className="w-full max-w-lg sm:rounded-xl sm:max-h-[90vh] overflow-y-auto p-6">
                <DialogHeader>
                    <DialogTitle className="text-lg sm:text-xl text-foreground">
                        Terms & Conditions
                    </DialogTitle>
                    <DialogDescription className="text-xs sm:text-sm text-muted-foreground">
                        Please review the following carefully before proceeding.
                    </DialogDescription>
                </DialogHeader>

                <div className="space-y-6 text-xs sm:text-sm leading-relaxed text-foreground">
                    {/* English */}
                    <div>
                        <p className="mb-2">
                            By continuing to use this application, you acknowledge and consent to the collection
                            and processing of your personal and business information, which may include:
                        </p>
                        <ul className="list-disc list-inside space-y-1">
                            <li>National ID Number</li>
                            <li>Current Occupation</li>
                            <li>Full Name</li>
                            <li>Registered Business Name</li>
                            <li>Commercial Registration Number</li>
                        </ul>
                        <p className="mt-2 text-muted-foreground">
                            This information is collected for verification and compliance purposes and will be
                            handled in accordance with applicable laws and regulations.
                        </p>
                    </div>

                    {/* Arabic */}
                    <div dir="rtl" className="text-right">
                        <p className="mb-2">
                            من خلال الاستمرار في استخدام هذا التطبيق، فإنك تقر وتوافق على جمع ومعالجة بياناتك
                            الشخصية والتجارية، والتي قد تشمل:
                        </p>
                        <ul className="list-disc list-inside space-y-1">
                            <li>رقم الهوية الوطنية</li>
                            <li>الوظيفة الحالية</li>
                            <li>الاسم الكامل</li>
                            <li>الاسم التجاري المسجل</li>
                            <li>رقم السجل التجاري</li>
                        </ul>
                        <p className="mt-2 text-muted-foreground">
                            يتم جمع هذه البيانات لأغراض التحقق والامتثال، وسيتم التعامل معها وفقاً للقوانين
                            واللوائح المعمول بها.
                        </p>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row justify-end gap-3 mt-6">
                    <Button onClick={acceptTerms} className="w-full sm:w-auto">
                        I Agree / أوافق
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}

