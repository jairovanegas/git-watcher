import { GithubCommit } from "../pages";
import Image from 'next/image'

export default function GitCommitView({ commit }: { commit: GithubCommit }) {
    return (
        <div className="shadow-md content-center items-center mt-3 mb-3 bg-white rounded-md p-2">
            <p className="text-3xl text-justify text-black">Commit message: <a href={commit.html_url} target="_blank" className="hover:text-blue-700">{commit.commit.message}</a></p>
            <div className="flex items-center text-black">
                <p className="text-left text-2xl mr-2">Author:</p> 
                <div className="h-10 w-10 bg-cover rounded-md" style={{ backgroundImage: `url(${commit.author.avatar_url})` }} />
                <div className="text-left text-2xl ml-2">
                    <p><a href={commit.author.html_url} target="_blank" className="hover:text-blue-700">{commit.author.login}</a></p>
                </div>
            </div>
        </div>
    )
}