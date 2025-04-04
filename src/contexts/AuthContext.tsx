
import React, { createContext, useContext, useState } from "react";
import LoginModal from "@/components/auth/LoginModal";
import SignUpModal from "@/components/auth/SignUpModal";

interface AuthContextType {
  openLoginModal: () => void;
  openSignUpModal: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
    setIsSignUpModalOpen(false);
  };

  const openSignUpModal = () => {
    setIsSignUpModalOpen(true);
    setIsLoginModalOpen(false);
  };

  const closeLoginModal = () => setIsLoginModalOpen(false);
  const closeSignUpModal = () => setIsSignUpModalOpen(false);

  return (
    <AuthContext.Provider
      value={{
        openLoginModal,
        openSignUpModal,
      }}
    >
      {children}
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={closeLoginModal} 
        onOpenSignUp={openSignUpModal} 
      />
      <SignUpModal 
        isOpen={isSignUpModalOpen} 
        onClose={closeSignUpModal} 
        onOpenLogin={openLoginModal} 
      />
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
