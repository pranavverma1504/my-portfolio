import TypingEffect from "../typingEffect/TypingEffect";
import './Hero.css'

const Hero = () => {
  return (
    <>
    <div className="hero">
        <div className="part1">
            <h1>Pranav Verma</h1>
        </div>
        <div className="part2">
            <p>A Developer Dedicated to Crafting <br /><TypingEffect /> <br /> Web Solutions</p>
        </div>

    </div>
    </>
  )
}

export default Hero