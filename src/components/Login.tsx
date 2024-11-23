// import { Card } from "@/components/ui/card.tsx"
import {goTo} from "react-chrome-extension-router"
import {Avatar, AvatarImage} from "../../Downloads/chrome-extension-production/src/components/ui/avatar.tsx"
import {forwardRef, Ref, useEffect, useRef, useState} from "react"
import {
    EmailIcon,
    PasswordIcon,
    EyeIcon,
    EyeOffIcon,
    LoadingIcon,
    SparklesIcon,
} from "../../Downloads/chrome-extension-production/src/lib/svg"
import {Button} from "../../Downloads/chrome-extension-production/src/components/ui/button"
import {
    ErrorMessage,
    Field,
    Form,
    Formik,
    FormikHelpers,
    useField,
} from "formik"
import {toFormikValidate} from "zod-formik-adapter"
import {z} from "zod"
import Dashboard from "src/components/Dashboard.tsx";
import axios from "axios";

// import { Link } from "react-chrome-extension-router"
// import Dashboard from "@/components/Dashboard.tsx"

const Schema = z.object({
    email: z
        .string()
        .email()
        .min(1, {message: "Please enter an email"})
        .max(100, {message: "Too many characters"}),
    password: z
        .string()
        .min(8, {message: "Password must be at least 8 characters"})
        .max(70, {message: "Too many characters"}),
})

export default function Login() {
    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)

    const [isLoggedIn] = useState(localStorage.getItem("token"))

    const [focused, setFocused] = useState<string | null>(null)
    const [credentialError, setCredentialError] = useState<{
        is_errored: boolean
        message: string | null
    }>({
        is_errored: false,
        message: null,
    })
    // const [isMagicLinkSent, setIsMagicLinkSent] = useState(false)
    // const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [magicButtonHover, setMagicButtonHover] = useState(false)

    useEffect(() => {
        if (emailRef.current) {
            emailRef.current.focus()
        }
        if (localStorage.getItem("token")) {
            console.log("token")
            goTo(Dashboard)
        }
    }, [])

    useEffect(() => {
        if (isLoggedIn && isLoggedIn.length > 0) {
            goTo(Dashboard)
        }
    }, [isLoggedIn])

    console.log("Login page outside useEffect")

    const handleSubmit = async (
        values: Values,
        {setSubmitting}: FormikHelpers<Values>
    ) => {
        try {
            setSubmitting(true)

            const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/auth`, {
                email: values.email,
                password: values.password,
            })

            if (data.token) {
                localStorage.setItem("token", data.token)
                localStorage.setItem("user", JSON.stringify(data.user))
                goTo(Dashboard)
            }
        } catch (e) {
            console.log("error", e)
        }

        /*        localStorage.setItem("email", values.email)
                localStorage.setItem("token", 'test-token')*/

        //goTo(Dashboard)
    }

    async function handleMagicLink(email: string) {
        // Send magic link
        console.log("Sending magic link to", email)
        /* try {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_NEXT_API_URL}/clients/auth/magic-link`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                ...getWorkspaceKeyHeaderFromProvider(provider),
              },
              body: JSON.stringify({
                email,
                callback_url: window.location.origin + (redirectPath ?? ""),
              }),
            }
          )

          if (!res.ok) {
            setCredentialError({
              is_errored: true,
              message: t("signIn.emailInvalid"),
            })
          }

          if (res.ok) {
            setIsMagicLinkSent(true)
          }
        } catch (e) {} */
    }

    return (
        <div className="relative bg-white text-start flex flex-col items-center justify-center w-full p-8 h-[100dvh]">
            <div className="w-full flex items-center justify-center">
                <Avatar className={"w-20 h-20 mb-4"}>
                    <AvatarImage
                        className="w-full h-full"
                        src="/assets/logo-with-effects.png"
                        alt="Happly"
                    />
                </Avatar>
            </div>

            <Formik
                initialValues={{
                    email: "",
                    password: "",
                }}
                onSubmit={handleSubmit}
                validate={toFormikValidate(Schema)}
            >
                {({isSubmitting, values}) => (
                    <Form className="signInForm space-y-12">
                        <div className="inputs space-y-6">
                            <div className="email">
                                <label
                                    htmlFor="email"
                                    className="mb-2 block text-sm text-[#2F2F30]"
                                >
                                    E-mail <span className="text-[#E30147]">*</span>
                                </label>
                                <div
                                    className={
                                        "flex cursor-text items-center gap-x-4 overflow-hidden rounded-[10px] border px-6 py-3 text-sm" +
                                        (focused === "email"
                                            ? " border-clarity-3"
                                            : " border-clarity-4")
                                    }
                                    onClick={() => {
                                        if (emailRef.current) {
                                            emailRef.current.focus()
                                            setFocused("email")
                                        }
                                    }}
                                >
                                    {EmailIcon("")}
                                    <Field
                                        innerRef={emailRef}
                                        // placeholder={t('signIn.enterEmail')}
                                        type="email"
                                        name="email"
                                        autoFocus
                                        spellCheck={false}
                                        onFocus={() => {
                                            setCredentialError({
                                                is_errored: false,
                                                message: null,
                                            })
                                            setFocused("email")
                                        }}
                                        onBlur={() => setFocused(null)}
                                        className="signUpTextField block w-full border-none p-0 outline-none placeholder:text-[#9C9C9C] focus:outline-none focus:ring-0"
                                    />
                                </div>
                                <ErrorMessage
                                    component="span"
                                    className="ml-2 text-sm text-red-500"
                                    name="email"
                                />{" "}
                            </div>

                            <div className="password">
                                <label
                                    htmlFor="password"
                                    className="mb-2 block text-sm text-[#2F2F30]"
                                >
                                    {/* {t("signIn.password")} */}
                                    Password
                                </label>
                                <PasswordFieldWithRef
                                    ref={passwordRef}
                                    focused={focused}
                                    setFocused={setFocused}
                                    showPassword={showPassword}
                                    setShowPassword={setShowPassword}
                                />
                                <ErrorMessage
                                    component="span"
                                    className="ml-2 text-sm text-red-500"
                                    name="password"
                                />{" "}
                            </div>

                            {credentialError.is_errored && (
                                <div className="mt-4 w-full text-center text-sm text-red-500">
                                    {credentialError.message}
                                </div>
                            )}

                            <div className="flex -mt-2 w-full text-xs hover:underline">
                                {/* <Link
                  onClick={(e) => {
                    if (onForgotPasswordClick) {
                      e.preventDefault()
                      e.stopPropagation()
                      onForgotPasswordClick()
                    }
                  }}
                  href={ROUTES.FORGOT_PASSWORD}
                  className="forgotPassword text-sm text-[var(--primary-color)] hover:underline"
                >
                  {t("signIn.forgotPassword")}
                </Link> */}
                                Forgot password?
                            </div>
                        </div>

                        <div className="buttons mb-12 space-y-4">
                            <Button
                                onClick={() =>
                                    setCredentialError({
                                        is_errored: false,
                                        message: null,
                                    })
                                }
                                disabled={isSubmitting}
                                variant={"secondary"}
                                type="submit"
                                className="w-full"
                            >
                                {isSubmitting
                                    ? LoadingIcon("var(--primary-color-text)")
                                    : /* t("signIn.logIn")} */ "Log in"}
                            </Button>

                            <div className="horizontalDivider flex items-center justify-center gap-x-2">
                                <hr className="w-full border-[#E1E6F4]"/>
                                <span className="text-sm text-[#9C9C9C] shrink-0">
                  {/* {t("signIn.or")} */}Sign in or
                </span>
                                <hr className="w-full border-[#E1E6F4]"/>
                            </div>

                            <div className="magicLink">
                                <Button
                                    type="button"
                                    variant={"outlined"}
                                    disabled={isSubmitting /* || !validateEmail(values.email) */}
                                    onClick={() => {
                                        /* if (!validateEmail(values.email)) {
                                          setCredentialError({
                                            is_errored: true,
                                            message: "Enter email", // t("signIn.enterEmail")
                                          })
                                          return
                                        } */
                                        setCredentialError({
                                            is_errored: false,
                                            message: null,
                                        })
                                        handleMagicLink(values.email)
                                    }}
                                    onMouseEnter={() => setMagicButtonHover(true)}
                                    onMouseLeave={() => setMagicButtonHover(false)}
                                    className="w-full"
                                >
                                    {SparklesIcon({
                                        primaryColor: magicButtonHover
                                            ? "var(--primary-color-text)"
                                            : "var(--primary-color)",
                                        size: 16,
                                    })}
                                    <span>
                    {/* {t("signIn.magicLinkStart")} {t("signIn.magicLinkEnd")} */}
                                        Sign up with magic link
                  </span>
                                </Button>
                                <p className="mt-4 text-sm leading-snug text-[#575759] font-light">
                                    {/* {t("signIn.magicLinkDescription")} */}
                                    Skip the password hassle! Enter your email, and we'll send you
                                    a secure magic link for instant access.
                                </p>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>

            <p className="absolute bottom-8 loginLink text-center text-sm">
                <span className="text-[#2F2F30]">Don't have an account?</span>{" "}
                <a href="" className="font-medium text-primaryColor hover:underline">
                    Create an account
                </a>
            </p>

            {/* <Card className={"bg-gradient-to-b from-blue-300 to-secondary px-4 py-6"}>
        <h1 className="text-2xl font-bold">
          Welcome to <span className="text-blue-500">Happly</span>
        </h1>
        <Button>
          <Link component={Dashboard} className="text-white hover:opacity-75">
            Go to Dashboard
          </Link>
        </Button>
      </Card> */}
        </div>
    )
}

type PasswordFieldProps = {
    focused: string | null
    setFocused: (value: string | null) => void
    showPassword: boolean
    setShowPassword: (value: boolean) => void
}

const PasswordFieldWithRef = forwardRef<HTMLInputElement, PasswordFieldProps>(
    function PasswordField(
        {focused, setFocused}: PasswordFieldProps,
        ref: Ref<HTMLInputElement>
    ) {
        const [field] = useField("password")
        const [showPassword, setShowPassword] = useState(false)

        return (
            <div
                className={
                    "flex cursor-text items-center gap-x-4 overflow-hidden rounded-[10px] border px-6 h-[50px] text-sm" +
                    (focused === "password" ? " border-clarity-3" : " border-clarity-4")
                }
                onClick={() => {
                    if (ref && "current" in ref && ref.current) {
                        ref.current.focus()
                    }
                }}
            >
                {PasswordIcon("shrink-0")}
                <Field
                    innerRef={ref}
                    // placeholder={t('signUp.enterPassword')}
                    type={showPassword ? "text" : "password"}
                    name="password"
                    onFocus={() => setFocused("password")}
                    onBlur={() => setFocused(null)}
                    className="signUpTextField block w-full border-none p-0 outline-none placeholder:text-[#9C9C9C] focus:outline-none focus:ring-0"
                />
                {field.value && (
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="py-2 pl-2 hover:brightness-75"
                    >
                        {showPassword ? EyeOffIcon() : EyeIcon()}
                    </button>
                )}
            </div>
        )
    }
)

/* function validateEmail(email: string) {
  try {
    const validatedEmail = z.string().email().parse(email)
    return validatedEmail
    return true
  } catch (error) {
    console.log("validateEmail error", error)
    return false
  }
} */

interface Values {
    email: string
    password: string
}
