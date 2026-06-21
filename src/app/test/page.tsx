"use client";
import Button from "@/components/ui/Button";
import { useDevice } from "@/hooks/useDevice";
import { api } from "@/lib/api";
import { gqlClient } from "@/graphql/client";

export default function TestPage() {
  const device = useDevice();

  return (
    <div>
      <h3>Environment Test Page</h3>

      <p>Device detected: {device}</p>
      <p>API says: {api.ping()}</p>

      <Button>Test Button</Button>

      <pre style={{ marginTop: 20 }}>
        GraphQL: {JSON.stringify(gqlClient.query(), null, 2)}
      </pre>
    </div>
  );
}
