'use client';

import { useUser } from '@clerk/nextjs';
import { useState, useEffect } from 'react';
import styles from './search.module.css';

export function Search() {
    const { user } = useUser();
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const handleSearch = async () => {
        // Fetch search results
        const response = await fetch(`/api/search?q=${query}`);
        const data = await response.json();
        setResults(data.results);
    };

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <input 
                    className={styles.input}
                    placeholder="Search..." 
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button 
                    className={styles.button}
                    onClick={handleSearch}
                >
                    Search
                </button>
            </header>
            {isClient && (
                <div className={styles.grid}>
                    {results.map((result, index) => (
                        <div 
                            key={index} 
                            className={styles.card}
                        >
                            {/* <h2 className={styles.title}>{result.title}</h2>
                            <p className={styles.description}>{result.description}</p> */}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
