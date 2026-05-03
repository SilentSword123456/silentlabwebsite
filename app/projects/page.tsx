import {MineGuardian} from "@/app/projects/Projects";

function Page(){
    return (
        <main className={"subtitle"}>
            <h1>{"Problems I've solved"}</h1>
            <p>{"Here are listed the top projects I've built or have helped building"}</p>
            <div>
                <MineGuardian/>
            </div>
        </main>
    )
}

export default Page;