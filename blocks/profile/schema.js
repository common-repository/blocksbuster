 /**
	* @package BlocksBuster
	* @since 0.0.1
	*
	*/
 
 const profileSchema = {
   heroTitle: {
		 type: "sting",
		 default:"Let's work together"
   },
   title: {
		 type: "string",
		 default: "Shahjehan Ali"
   },
   subTitle: {
		 type: "string",
		 default: "Front-end developer"
   },
   profileContent: {
     type: "array",
     selector: ".wpbb-card-description",
		 source: "children",
		 default: "Be the person you are searching for. Else, be the Batman. Note to self: Always be the Batman."

   },
   profileAlignment: {
     type: "string"
   },
   profileImgURL: {
     type: "string",
     source: "attribute",
     attribute: "src",
     selector: "img"
   },
   profileImgID: {
     type: "number"
   },
   profileImgALT: {
     type: "string",
     source: "attribute",
     attribute: "alt",
     selector: "img"
   },
   headerBackgroundColor: {
     type: "string"
   },
   profileBackgroundColor: {
     type: "string",
     default: "#f2f2f2"
   },
   profileTextColor: {
     type: "string",
     default: "#32373c"
   },
   iconColor: {
     type: "string",
     default: "#fff"
   },
   iconBackgroundColor: {
     type: "string",
     default: "#534f57"
   },
   profileFontSize: {
     type: "number",
     default: 16
   },
   borderRadius: {
     type: "number",
     default: 12
   },
   twitterURL: {
		 type: "url",
		 default: "#"
   },
   facebookURL: {
		 type: "url",
		 default: "#"
   },
   instagramURL: {
		 type: "url",
		 default: "#"
   },
   youtubeURL: {
		 type: "url",
		 default: "#"
	 },
	 align: {
		 type: 'string',
		 default: 'center'
	 },
 };

export default  profileSchema;