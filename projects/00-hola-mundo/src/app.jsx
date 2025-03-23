import './app.css'
import { TwitterFollowCard } from './twitterFollowCard'

export function App() {
    return (
        <section className="app">
         <TwitterFollowCard userName="midudev">
            Miguel Ojeda
         </TwitterFollowCard>

         <TwitterFollowCard userName="gianella03"> 
            Gianella Carla Lastra
         </TwitterFollowCard>

         <TwitterFollowCard userName="superman" >
            Luis Antonio Valle
         </TwitterFollowCard>

         <TwitterFollowCard userName="lucasito" >
            Lucas Santino 
         </TwitterFollowCard>
        </section>
    )
}