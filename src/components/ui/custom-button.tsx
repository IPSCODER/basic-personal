"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SignIn from "../auth/sign-in";
import SignUp from "../auth/sign-up";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";

// Mock authentication state (replace this with actual auth check)
const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return { isAuthenticated, setIsAuthenticated };
};

const CustomButton = ({ onClick, href, children, className }:any) => {
  const { isAuthenticated } = useAuth();
  const [open, setOpen] = useState(false);

  const handleClick = (event:any) => {
    if (!isAuthenticated) {
      event.preventDefault(); // Prevent navigation
      setOpen(true); // Show sign-in popup
      return;
    }
    if (onClick) onClick();
  };

  return (
    <>
      {href ? (
        <Link href={href} passHref>
          <Button className={className} onClick={handleClick}>
            {children}
          </Button>
        </Link>
      ) : (
        <Button className={className} onClick={handleClick}>
          {children}
        </Button>
      )}

      {/* Sign-In Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogTitle>Sign In / Sign Up</DialogTitle> {/* Required for accessibility */}
          <Tabs defaultValue="sign-in" className="w-full">
            <TabsList className="w-full">
              <TabsTrigger value="sign-in">Sign In</TabsTrigger>
              <TabsTrigger value="sign-up">Sign Up</TabsTrigger>
            </TabsList>
            <TabsContent value="sign-in">
              <SignIn onAuthenticated={() => setOpen(false)} />
                
            </TabsContent>
            <TabsContent value="sign-up">
              <SignUp onAuthenticated={() => setOpen(false)} />
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CustomButton;
