import React from 'react'
import ImageSlider from '../components/ImageSlider'
import image1 from 'C:/Users/Balls/game-website/src/images/screenshot1.png'
import image2 from 'C:/Users/Balls/game-website/src/images/screenshot2.png'

export default () => {
    const slides = [
        {url: image1, title: 'tutorial level'},
        {url: image2, title: 'tutorial level'}
    ]

    const containerStyles = {
        width: '800px',
        height: '450px',
        margin: '0 auto',
        marginBottom: '2rem'
    }

    return (
        <div>
            
            <div style={containerStyles}>
                <ImageSlider slides={slides} />
            </div>
            <hr />
            <div style={{textAlign: 'center'}}>
                <fieldset style={{padding: 0, margin: '0 35%'}}>
                    <h1>Overview</h1>
                    <p>This game is an indie project from a two person team:</p>
                    <fieldset style={{width: '25rem', padding: '0', margin: '0 auto'}}>
                        <p><strong>Sergey Martinez:</strong> story/concept</p>
                        <p><strong>Tre Knowland:</strong> art/assets/programming/website</p>
                    </fieldset>
                    <p>All art was made in <a href="https://www.aseprite.org/">Aseprite</a></p>
                    <p>Programming and development is done in the <a href="https://godotengine.org/">Godot Engine</a></p>
                    <p>Current sound effects were made using <a href="https://sfbgames.itch.io/chiptone">CHIPTONE</a></p>
                </fieldset>
            </div>
        </div>
    )
}