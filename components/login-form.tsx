import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "components/ui/card";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "components/ui/field";
import { Input } from "components/ui/input";
import { Button } from "./ui/button";
import { cn } from "app/lib/utils";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="bg-gray-600 text-white">
        <CardHeader className="justify-center items-center gap-2 text-center">
          <CardTitle>Login to your account</CardTitle>
          <CardDescription className="text-black">
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </Field>
              <Field>
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                <Input id="password" type="password" required />
              </Field>
              <Field>
                <div className="flex items-center">
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Button className="font-extrabold" type="submit">Login</Button>
                <Button className="text-black font-extrabold" variant="outline" type="button">
                  Login with Google
                </Button>
                <FieldDescription className="text-center">
                  Don&apos;t have an account? <a href="#">Sign up</a>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
