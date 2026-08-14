import { useGetHealth } from "../generated/health/health";

export function HealthPage() {
    const { data, isPending, isError } = useGetHealth();

    if (isPending) {
        return <p>Loading...</p>;
    }

    if (isError) {
        return <p>Backend: NG</p>;
    }

    return (
        <main>
            <h1>Questory</h1>

            <h2>Health Check</h2>

            <dl>
                <div>
                    <dt>Backend</dt>
                    <dd>{data?.status}</dd>
                </div>

                <div>
                    <dt>Database</dt>
                    <dd>{data?.database}</dd>
                </div>
            </dl>
        </main>
    );
}