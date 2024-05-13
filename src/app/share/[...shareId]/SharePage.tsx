'use client';
import WebsiteDetails from 'app/(main)/websites/[websiteId]/WebsiteDetails';
import { useShareToken, useTheme } from 'components/hooks';
import Page from 'components/layout/Page';
import styles from './SharePage.module.css';
import { useEffect } from 'react';

export default function SharePage({ shareId }) {
  const { saveTheme } = useTheme();
  const { shareToken, isLoading } = useShareToken(shareId);

  useEffect(() => {
    saveTheme('dark');
  }, []);

  if (isLoading || !shareToken) {
    return null;
  }

  return (
    <div className={styles.container}>
      <Page>
        <WebsiteDetails websiteId={shareToken.websiteId} />
      </Page>
    </div>
  );
}
