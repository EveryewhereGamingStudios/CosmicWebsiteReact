import IconButton from '../assets/discord_small_icon';

const smallDiscordButton = ({ text, onClick }) => {
  return (
    <>
      <a href="https://discord.com" target="_blank" rel="noreferrer noopener" className="text-white font-medium rounded-md">
        <button className="text-button flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-800 ml-4">
          <img src={discordIcon} alt="Discord icon" className="w-6 h-6 mr-2" />
          <span className="text-button-text">{text}</span>
        </button>
      </a>
      <div className="icon-button-container">
        <IconButton />
      </div>
    </>
  )
}

export default smallDiscordButton
