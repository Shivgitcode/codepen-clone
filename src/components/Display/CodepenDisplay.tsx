
export default function CodepenDisplay({ displayBlock }: { displayBlock: string }) {
    return (
        <>
            <iframe srcDoc={displayBlock} title="Output" sandbox="allow-scripts" frameBorder={0} width="100%" height="100%;" >

            </iframe>

        </>
    )
}
