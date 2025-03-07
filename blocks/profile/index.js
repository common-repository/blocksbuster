/**
 * Block dependencies
 */
//import icon from './icon';
import './style.scss';
import './editor.scss';
import classnames from 'classnames';
import schema from './schema';
import Inspector  from './inspector';
import socialIcons from './sicons';
/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { 
				applyFilters, 
				doAction, 
				addFilter
			} = wp.hooks;
const { Fragment } = wp.element;
const{
	RichText,
	MediaUpload,
	BlockControls,
	BlockAlignmentToolbar,
} = wp.editor;

const {	Button } = wp.components;
const ALLOWED_MEDIA_TYPES = ['image'];



/**
 * Register block
 */
export default registerBlockType(
	'blocksbuster/profile',
	{
		title: __('Author Profile', 'blocksbuster'),
		description: __('Profile block use to show info about users.', 'blocksbuster'),
		category: 'common',
		icon: {
			src: 'admin-users',
		},
		keywords: applyFilters('blocksbuster_profile_keywords' ,[
			__('Profile', 'blocksbuster'),
			__('Author', 'blocksbuster'),
			__('User', 'blocksbuster'),
		]),
		attributes: schema,
		supports:{
			align: ['left', 'center', 'right']
		},
		edit: props => {
			const { 
							className,
							setAttributes ,
							isSelected } = props;

			const { 
							heroTitle,
							title,
							subTitle,
							profileContent,	
							profileImageID,
							profileImageURL,
							profileImageALT,
							facebookURL,
							twitterURL,
							youtubeURL,
							instagramURL,
							headerBackgroundColor,
							profileBackgroundColor,
							borderRadius,
							profileFontSize,
							iconColor,
							iconBackgroundColor,
							align

			} = props.attributes;

			const onSelectImage = img => {
				setAttributes({
          profileImageID: img.id,
          profileImageURL: img.url,
          profileImageAlt: img.alt
        });
			};
			const onRemoveImage = () => {
				setAttributes({
					imgID: 0,
					imgURL: '',
					imgAlt: '',
				});
			};
			const descriptionClasses = classnames( 'wpbb-card-description', `wpbb-description-font-${profileFontSize}`	);
			return <Fragment>
          <Inspector {...{ setAttributes, ...props }} />
          <div className={className}>
					<div className="wpbb-section" style={ {
						backgroundColor : headerBackgroundColor,
						}}>
              <div className="wpbb-card-wrapper">
                <RichText tagName="h2" className={"wpbb-hero-title"} multiline={false} placeholder={"Let's talk togethers"} onChange={title => setAttributes(
                      { heroTitle: title }
                    )} value={heroTitle} keepPlaceholderOnFocus />
									<div 	className="wpbb-card-profile" 
												style={{
															backgroundColor: profileBackgroundColor ,
															borderRadius: `${borderRadius}px`	 
															}}>
                      <div className="wpbb-card-avatar">
                        <a href="javascript:void(0)">
													<MediaUpload 
													title={"Upload Profile Image"}
													onSelect={onSelectImage} 
													onRemove={onRemoveImage} 
													allowedTypes={ALLOWED_MEDIA_TYPES} 
													value={profileImageID} 
													render={({ open }) => <Button className={"button button_img_upload"} onClick={open}>
                                {<img className="wpbb-profile-img" src={profileImageURL ? profileImageURL : "https://multiversitystatic.s3.amazonaws.com/uploads/2013/02/Bruce-Wayne-Jordan-Gibson-Art-Of-The-Week.png"} alt={profileImageALT} />}
                              </Button>} />
                        </a>
                      </div>
                      <div className="wpbb-card-block">
                        <div className="wpbb-author">
													<RichText 
													tagName="h4" 
													className={"wpbb-card-title"} 
													multiline={false} 
													placeholder={"Shahjehan Ali"} 
													onChange={title => setAttributes({ title } )} 
													formattingControls={[]} 
													keepPlaceholderOnFocus value={title} />
													<RichText 
														tagName="h6" 
														className={"wpbb-card-category"} 
														multiline={false} 
														placeholder={"Front-end developer"} 
														onChange={subTitle => setAttributes(
                                { subTitle }
															)} 
														formattingControls={[]} 
														keepPlaceholderOnFocus 
														value={subTitle} />
                        </div>
												
												<RichText 
													tagName="div" 
													className={descriptionClasses} 
													multiline="p" 
													placeholder={"Be the person you are searching for. Else, be the Batman. Note to self: Always be the Batman."} 
													onChange={profileContent => setAttributes(
                              { profileContent }
														)} 
													value={profileContent} keepPlaceholderOnFocus />
                      </div>
                      <div className="wpbb-card-footer">
											{facebookURL && <a href={facebookURL} className="wpbb-social-link wpbb-facebook" style={{ backgroundColor: iconBackgroundColor , color:iconColor}}> {socialIcons.facebook} </a>}
											{twitterURL && <a href={twitterURL} className="wpbb-social-link wpbb-twitter" style={{ backgroundColor: iconBackgroundColor, color: iconColor }}> {socialIcons.twitter} </a>}
											{youtubeURL && <a href={youtubeURL} className="wpbb-social-link wpbb-youtube" style={{ backgroundColor: iconBackgroundColor, color: iconColor }}> {socialIcons.youtube} </a>}
											{instagramURL && <a href={instagramURL} className="wpbb-social-link wpbb-instagram" style={{ backgroundColor: iconBackgroundColor, color: iconColor }}> {socialIcons.instagram} </a>}
                      </div>
                    </div>
                  </div>
            </div>
          </div>
        </Fragment>;
		},
		save: props => {
			const { className, sSelected } = props;
			const {
				heroTitle,
				title,
				subTitle,
				profileContent,
				profileImageURL,
				profileImageALT,
				facebookURL,
				twitterURL,
				youtubeURL,
				instagramURL,
				headerBackgroundColor,
				profileBackgroundColor,
				borderRadius,
				profileFontSize,
				iconBackgroundColor,
				iconColor
			} = props.attributes;
			const descriptionClasses = classnames('wpbb-card-description', `wpbb-description-font-${profileFontSize}`);
			return (
        <div className={className}>
          <div
            className="wpbb-section"
            style={{
              backgroundColor: headerBackgroundColor
            }}
          >
            <div className="wpbb-card-wrapper">
              <h2 className={"wpbb-hero-title"}>{heroTitle}</h2>
              <div
                className="wpbb-card-profile"
                style={{
                  backgroundColor: profileBackgroundColor,
                  borderRadius: `${borderRadius}px`
                }}
              >
                <div className="wpbb-card-avatar">
                  <a href="#avatar">
                    <img
											className="wpbb-profile-img"
                      src={
                        profileImageURL
                          ? profileImageURL
                          : "https://multiversitystatic.s3.amazonaws.com/uploads/2013/02/Bruce-Wayne-Jordan-Gibson-Art-Of-The-Week.png"
                      }
                      alt={profileImageALT}
                    />
                  </a>
                </div>
								<div className="wpbb-card-block">
									<div className="wpbb-author">
										<h4 className={"wpbb-card-title "}>{title}</h4>
										<h6 className={"wpbb-card-category"}>{subTitle}</h6>
                  </div>

									<div className={descriptionClasses}>
                    {profileContent}
                  </div>
                </div>
                <div className="wpbb-card-footer text-center">
                  {facebookURL && (
                    <a
                      href={facebookURL}
                      className="wpbb-social-link wpb-facebook"
                      style={{
                        backgroundColor: iconBackgroundColor,
                        color: iconColor
                      }}
                    >
                     {socialIcons.facebook}
                    </a>
                  )}
                  {twitterURL && (
                    <a
                      href={twitterURL}
											className="wpbb-social-link wpb-twitter"
                      style={{
                        backgroundColor: iconBackgroundColor,
                        color: iconColor
                      }}
                    >
                    
                      {socialIcons.twitter}
                    </a>
                  )}
                  {youtubeURL && (
                    <a
                      href={youtubeURL}
											className="wpbb-social-link wpb-youtube"
                      style={{
                        backgroundColor: iconBackgroundColor,
                        color: iconColor
                      }}
                    >
                      {socialIcons.youtube}
                    </a>
                  )}
                  {instagramURL && (
                    <a
                      href={instagramURL}
											className="wpbb-social-link wpb-instagram"
                      style={{
                        backgroundColor: iconBackgroundColor,
                        color: iconColor
                      }}
                    >
                      {socialIcons.instagram}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
		}
	}
);
