import { useCallback, useState } from 'react';
import { useQuery } from 'react-query';

export default function useLazyQuery(key: any, fn: any, options = {}) {
  const [enabled, setEnabled] = useState(false);
  const query = useQuery(key, fn, {
    ...options,
    enabled,
  });

  return [useCallback(() => setEnabled(true), []), query];
}
