/**
 * Internal block libraries
*/
const { __ } = wp.i18n;
const { Component } = wp.element;
const {
  InspectorControls,
  PanelColorSettings,
  BlockControls,
  BlockAlignmentToolbar
} = wp.editor;

const {
	PanelBody,
	PanelRow,
	RangeControl,
	TextControl,
} = wp.components;


/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {

	constructor(){
		super( ...arguments)
	}
	render(){
		const {
      attributes: {
        headerBackgroundColor,
        profileBackgroundColor,
        profileTextColor,
        iconColor,
        iconBackgroundColor,
        profileFontSize,
        borderRadius,
        twitterURL,
        facebookURL,
        instagramURL,
        youtubeURL
      },
      setAttributes
    } = this.props;

		return (
			
      <InspectorControls>
        <PanelBody>
          <RangeControl
            label={__("Font Size", "blockbuster")}
            value={profileFontSize}
            onChange={profileFontSize => setAttributes({ profileFontSize })}
            min={1}
            max={25}
          />
        </PanelBody>
        <PanelBody>
          <RangeControl
            label={__("Border Radius", "blockbuster")}
            value={borderRadius}
            onChange={borderRadius => setAttributes({ borderRadius })}
            min={0}
            max={100}
          />
        </PanelBody>
        <PanelColorSettings
          initialOpen={false}
          title={__("Color Settings", "blocksbuster")}
          colorSettings={[
         
            {
              value: profileBackgroundColor,
              onChange: profileBackgroundColor => {
                setAttributes({ profileBackgroundColor });
              },
              label: __("Body Color", "blocksbuster")
            }
            
          ]}
        />
        <PanelColorSettings
          initialOpen={false}
          title={__("Social Icon Color Settings", "blocksbuster")}
          colorSettings={[
            {
              value: iconColor,
							onChange: iconColor => {
								setAttributes({ iconColor });
              },
              label: __("Icon Color", "blocksbuster")
            },
            {
              value: iconBackgroundColor,
              onChange: iconBackgroundColor => {
                setAttributes({ iconBackgroundColor });
              },
              label: __("Background Color", "blocksbuster")
            }
          ]}
        />
        <PanelBody title={"Social Links"} initialOpen={false}>
          <PanelRow>Add links to your social profile.</PanelRow>
          <TextControl
            label={__("Facebook URL", "blocksbuster")}
            value={facebookURL}
            onChange={facebook => setAttributes({ facebookURL: facebook })}
          />
          <TextControl
            label={__("Twitter URL", "blocksbuster")}
            value={twitterURL}
            onChange={twitter => setAttributes({ twitterURL: twitter })}
          />
          <TextControl
            label={__("Instagram URL", "blocksbuster")}
            value={instagramURL}
            onChange={instagram =>
              setAttributes({ instagramURL: instagram })
            }
          />
          <TextControl
            label={__("Youtube URL", "blocksbuster")}
            value={youtubeURL}
            onChange={youtube => setAttributes({ youtubeURL: youtube })}
          />
        </PanelBody>
      </InspectorControls>
    );
	}

}