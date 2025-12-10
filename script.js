:root {
    --bg-color: #000;
    --screen-bg: #121212;
    --accent-color: #0a84ff;
    --text-color: #fff;
    --hacker-green: #0f0;
    --danger-color: #ff3b30;
}

body {
    background-color: #2c3e50;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    margin: 0;
    font-family: 'Roboto', sans-serif;
    color: var(--text-color);
}

/* スマホ筐体 */
.phone-container {
    width: 375px;
    height: 667px; /* iPhone 8/SE 基準 */
    background-color: var(--screen-bg);
    border-radius: 40px;
    box-shadow: 0 0 50px rgba(0,0,0,0.5);
    position: relative;
    overflow: hidden;
    border: 12px solid #333;
}

.status-bar {
    height: 30px;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    align-items: center;
    font-size: 12px;
    background: rgba(0,0,0,0.2);
}

.screen {
    display: none;
    height: calc(100% - 30px);
    flex-direction: column;
    padding: 20px;
    box-sizing: border-box;
}

.screen.active {
    display: flex;
}

/* Menu */
.menu-content {
    text-align: center;
    margin-top: 100px;
}
.menu-content h1 {
    font-family: 'Roboto Mono', monospace;
    font-size: 2.5rem;
    color: var(--hacker-green);
    margin-bottom: 10px;
}
.menu-buttons button {
    display: block;
    width: 100%;
    padding: 15px;
    margin: 10px 0;
    border-radius: 12px;
    border: none;
    background: var(--accent-color);
    color: white;
    font-size: 16px;
    cursor: pointer;
}
.menu-buttons button.secondary {
    background: #333;
}
.menu-buttons button.disabled {
    background: #555;
    opacity: 0.5;
    cursor: not-allowed;
}

/* Lock Screen */
.lock-ui {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
}
.lock-icon { font-size: 40px; margin-bottom: 20px; }
.passcode-display {
    font-size: 24px;
    letter-spacing: 5px;
    margin-bottom: 30px;
    min-height: 30px;
}
.numpad {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
}
.numpad button {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border: 1px solid rgba(255,255,255,0.3);
    background: rgba(255,255,255,0.1);
    color: white;
    font-size: 24px;
    cursor: pointer;
}
.numpad button:active { background: rgba(255,255,255,0.3); }
.hint-box {
    margin-top: 20px;
    font-size: 12px;
    color: #aaa;
    text-align: center;
    background: rgba(255,255,255,0.1);
    padding: 10px;
    border-radius: 8px;
    width: 100%;
}

/* Home Screen */
.header {
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    margin-bottom: 20px;
}
#game-timer { color: var(--danger-color); }
.app-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 15px;
}
.app-icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
}
.icon-img {
    width: 55px;
    height: 55px;
    border-radius: 12px;
    background: #444;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    margin-bottom: 5px;
    position: relative;
}
.icon-img.hacked::after {
    content: '✔';
    position: absolute;
    top: -5px;
    right: -5px;
    background: var(--hacker-green);
    color: black;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.app-name { font-size: 11px; text-align: center; }

/* Hack Screen */
.hack-header {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}
.hack-header button {
    background: none;
    border: none;
    color: var(--accent-color);
    font-size: 16px;
    cursor: pointer;
    margin-right: 15px;
}
.hack-content {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
}
.hack-icon {
    width: 80px;
    height: 80px;
    border-radius: 18px;
    background: #444;
    align-self: center;
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
}
.password-field {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
}
.password-field input {
    flex-grow: 1;
    padding: 10px;
    border-radius: 8px;
    border: 1px solid #444;
    background: #222;
    color: white;
}
.password-field button {
    padding: 0 20px;
    background: var(--accent-color);
    border: none;
    border-radius: 8px;
    color: white;
    cursor: pointer;
}
.terminal-logs {
    background: black;
    color: var(--hacker-green);
    font-family: 'Roboto Mono', monospace;
    font-size: 12px;
    padding: 10px;
    border-radius: 8px;
    height: 100px;
    overflow-y: auto;
    margin-bottom: 20px;
}
.ai-hint-area {
    background: rgba(255,255,255,0.1);
    padding: 15px;
    border-radius: 12px;
    display: flex;
    gap: 10px;
    align-items: flex-start;
}
.ai-avatar {
    width: 40px;
    height: 40px;
    background: var(--accent-color);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
}
.ai-message {
    font-size: 13px;
    line-height: 1.4;
}

/* Result Screen */
#screen-result {
    text-align: center;
    justify-content: center;
}
#screen-result h2 { color: var(--hacker-green); font-family: 'Roboto Mono'; }
.score-display { margin: 30px 0; }
.score-label { display: block; font-size: 14px; color: #aaa; }
.score-value { font-size: 48px; font-weight: bold; }
.story-container {
    background: #222;
    padding: 15px;
    border-radius: 12px;
    margin-bottom: 20px;
}
.story-image-placeholder {
    width: 100%;
    height: 150px;
    background: #333;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #666;
    margin-bottom: 10px;
    border: 1px dashed #555;
