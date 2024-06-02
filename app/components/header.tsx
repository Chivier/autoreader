'use client';

import { useUser } from '@clerk/nextjs';
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import styles from './header.module.css'; // Import the CSS module

export function Header() {
  const { user } = useUser();

  return (
    <header className={styles.header}>
      <div>
        <Link href="/" passHref>
          <h1 className={styles.logo}>AutoReader</h1>
        </Link>
      </div>
      <div>
        {user ? (
          <UserButton
            appearance={{
              elements: {
                userButtonAvatarBox: "size-6",
              },
            }}
          />
        ) : (
          <Link href="/dashboard" passHref>
            <h1 className={styles.signInButton}>Sign In</h1>
          </Link>
        )}
      </div>
    </header>
  );
}
