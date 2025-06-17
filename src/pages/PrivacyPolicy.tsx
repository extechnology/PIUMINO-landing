import { Shield, Calendar, Mail, Eye, Database, Users, Lock, Trash2, Globe, AlertCircle } from 'lucide-react';
const PrivacyPolicy = () => {
  return (
    <>
    <div className="pt-20 pb-20 bg-gradient-to-br from-background to-primary/5 container mx-auto">
      {/* Header */}
      <div className="border-b border-gray-200 pb-6 mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Shield className="w-8 h-8 text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
          <Calendar className="w-4 h-4" />
          <span>Last updated: June 14, 2025</span>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
          <p className="text-blue-800 font-medium mb-2">
            This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
          </p>
          <p className="text-blue-700">
            We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.
          </p>
        </div>
      </div>

      {/* Content Sections */}
      <div className="space-y-8">
        
        {/* Interpretation and Definitions */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Interpretation and Definitions</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-medium text-gray-800 mb-3">Interpretation</h3>
            <p className="text-gray-700 leading-relaxed">
              The words of which the initial letter is capitalized have meanings defined under the following conditions. 
              The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium text-gray-800 mb-4">Definitions</h3>
            <p className="text-gray-700 mb-4">For the purposes of this Privacy Policy:</p>
            
            <div className="bg-gray-50 p-6 rounded-lg space-y-4 max-h-96 overflow-y-auto">
              <div>
                <span className="font-semibold text-gray-900">Account</span>
                <span className="text-gray-700"> means a unique account created for You to access our Service or parts of our Service.</span>
              </div>
              
              <div>
                <span className="font-semibold text-gray-900">Affiliate</span>
                <span className="text-gray-700"> means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</span>
              </div>
              
              <div>
                <span className="font-semibold text-gray-900">Company</span>
                <span className="text-gray-700"> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to SADAF ELASTOMERS, 15/617, KASHAYAPADI, FEROKE, Kozhikode, Kerala, 673631.</span>
              </div>
              
              <div>
                <span className="font-semibold text-gray-900">Cookies</span>
                <span className="text-gray-700"> are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.</span>
              </div>
              
              <div>
                <span className="font-semibold text-gray-900">Country</span>
                <span className="text-gray-700"> refers to: Kerala, India</span>
              </div>
              
              <div>
                <span className="font-semibold text-gray-900">Device</span>
                <span className="text-gray-700"> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</span>
              </div>
              
              <div>
                <span className="font-semibold text-gray-900">Personal Data</span>
                <span className="text-gray-700"> is any information that relates to an identified or identifiable individual.</span>
              </div>
              
              <div>
                <span className="font-semibold text-gray-900">Service</span>
                <span className="text-gray-700"> refers to the Website.</span>
              </div>
              
              <div>
                <span className="font-semibold text-gray-900">Service Provider</span>
                <span className="text-gray-700"> means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.</span>
              </div>
              
              <div>
                <span className="font-semibold text-gray-900">Third-party Social Media Service</span>
                <span className="text-gray-700"> refers to any website or any social network website through which a User can log in or create an account to use the Service.</span>
              </div>
              
              <div>
                <span className="font-semibold text-gray-900">Usage Data</span>
                <span className="text-gray-700"> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).</span>
              </div>
              
              <div>
                <span className="font-semibold text-gray-900">Website</span>
                <span className="text-gray-700"> refers to www.piumino.in, accessible from www.piumino.in</span>
              </div>
              
              <div>
                <span className="font-semibold text-gray-900">You</span>
                <span className="text-gray-700"> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Collecting and Using Your Personal Data */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Database className="w-6 h-6 text-purple-600" />
            Collecting and Using Your Personal Data
          </h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-medium text-gray-800 mb-4">Types of Data Collected</h3>
            
            <div className="mb-6">
              <h4 className="text-lg font-medium text-gray-800 mb-3">Personal Data</h4>
              <p className="text-gray-700 mb-4">
                While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:
              </p>
              <div className="bg-purple-50 p-4 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <div className="flex items-center gap-2 text-purple-700">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span>Email address</span>
                  </div>
                  <div className="flex items-center gap-2 text-purple-700">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span>First name and last name</span>
                  </div>
                  <div className="flex items-center gap-2 text-purple-700">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span>Phone number</span>
                  </div>
                  <div className="flex items-center gap-2 text-purple-700">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span>Address, State, Province, ZIP/Postal code, City</span>
                  </div>
                  <div className="flex items-center gap-2 text-purple-700">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span>Usage Data</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-medium text-gray-800 mb-3">Usage Data</h4>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>Usage Data is collected automatically when using the Service.</p>
                <p>
                  Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
                </p>
                <p>
                  When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.
                </p>
                <p>
                  We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.
                </p>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-medium text-gray-800 mb-3 flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-600" />
                Information from Third-Party Social Media Services
              </h4>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>The Company allows You to create an account and log in to use the Service through the following Third-party Social Media Services:</p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                    <div className="flex items-center gap-2 text-blue-700 font-medium">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span>Google</span>
                    </div>
                    <div className="flex items-center gap-2 text-blue-700 font-medium">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span>Facebook</span>
                    </div>
                    <div className="flex items-center gap-2 text-blue-700 font-medium">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span>Instagram</span>
                    </div>
                    <div className="flex items-center gap-2 text-blue-700 font-medium">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span>Twitter</span>
                    </div>
                    <div className="flex items-center gap-2 text-blue-700 font-medium">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span>LinkedIn</span>
                    </div>
                  </div>
                </div>
                <p>
                  If You decide to register through or otherwise grant us access to a Third-Party Social Media Service, We may collect Personal data that is already associated with Your Third-Party Social Media Service's account, such as Your name, Your email address, Your activities or Your contact list associated with that account.
                </p>
                <p>
                  You may also have the option of sharing additional information with the Company through Your Third-Party Social Media Service's account. If You choose to provide such information and Personal Data, during registration or otherwise, You are giving the Company permission to use, share, and store it in a manner consistent with this Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tracking Technologies and Cookies */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Eye className="w-6 h-6 text-orange-600" />
            Tracking Technologies and Cookies
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyze Our Service.
            </p>
            
            <div className="space-y-4">
              <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
                <h4 className="font-medium text-orange-900 mb-2">Cookies or Browser Cookies</h4>
                <p className="text-orange-800">
                  A cookie is a small file placed on Your Device. You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You do not accept Cookies, You may not be able to use some parts of our Service.
                </p>
              </div>
              
              <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
                <h4 className="font-medium text-orange-900 mb-2">Web Beacons</h4>
                <p className="text-orange-800">
                  Certain sections of our Service and our emails may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company, for example, to count users who have visited those pages or opened an email and for other related website statistics.
                </p>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="text-lg font-medium text-gray-800 mb-3">Types of Cookies We Use</h4>
              <div className="space-y-3">
                <div className="bg-green-50 p-3 rounded-lg">
                  <h5 className="font-medium text-green-900">Necessary / Essential Cookies</h5>
                  <p className="text-green-800 text-sm">Session Cookies - Essential to provide services and authenticate users</p>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <h5 className="font-medium text-blue-900">Cookies Policy / Notice Acceptance Cookies</h5>
                  <p className="text-blue-800 text-sm">Persistent Cookies - Identify if users have accepted cookie usage</p>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg">
                  <h5 className="font-medium text-purple-900">Functionality Cookies</h5>
                  <p className="text-purple-800 text-sm">Persistent Cookies - Remember user preferences and login details</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use of Your Personal Data */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Use of Your Personal Data</h2>
          <p className="text-gray-700 mb-4">The Company may use Personal Data for the following purposes:</p>
          <div className="space-y-3">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-gray-900 mb-2">Service Provision & Maintenance</h4>
              <p className="text-gray-700">To provide and maintain our Service, including to monitor the usage of our Service.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-gray-900 mb-2">Account Management</h4>
              <p className="text-gray-700">To manage Your registration as a user of the Service and provide access to different functionalities.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-gray-900 mb-2">Contract Performance</h4>
              <p className="text-gray-700">The development, compliance and undertaking of purchase contracts for products, items or services.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-gray-900 mb-2">Communication</h4>
              <p className="text-gray-700">To contact You by email, telephone calls, SMS, or other forms of electronic communication regarding updates or informative communications.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-gray-900 mb-2">Marketing & Promotions</h4>
              <p className="text-gray-700">To provide You with news, special offers and general information about other goods, services and events (unless You have opted not to receive such information).</p>
            </div>
          </div>
        </section>

        {/* Retention of Your Personal Data */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Database className="w-6 h-6 text-indigo-600" />
            Retention of Your Personal Data
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our legal agreements and policies.
            </p>
            <p>
              The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods.
            </p>
          </div>
        </section>

        {/* Transfer of Your Personal Data */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Globe className="w-6 h-6 text-cyan-600" />
            Transfer of Your Personal Data
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction.
            </p>
            <div className="bg-cyan-50 border-l-4 border-cyan-400 p-4 rounded">
              <p className="text-cyan-800">
                Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.
              </p>
            </div>
            <p>
              The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information.
            </p>
          </div>
        </section>

        {/* Delete Your Personal Data */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Trash2 className="w-6 h-6 text-red-600" />
            Delete Your Personal Data
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              You have the right to delete or request that We assist in deleting the Personal Data that We have collected about You.
            </p>
            <p>
              Our Service may give You the ability to delete certain information about You from within the Service.
            </p>
            <p>
              You may update, amend, or delete Your information at any time by signing in to Your Account, if you have one, and visiting the account settings section that allows you to manage Your personal information. You may also contact Us to request access to, correct, or delete any personal information that You have provided to Us.
            </p>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
              <p className="text-yellow-800">
                Please note, however, that We may need to retain certain information when we have a legal obligation or lawful basis to do so.
              </p>
            </div>
          </div>
        </section>

        {/* Security of Your Personal Data */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Lock className="w-6 h-6 text-green-600" />
            Security of Your Personal Data
          </h2>
          <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
            <p className="text-green-800">
              The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.
            </p>
          </div>
        </section>

        {/* Children's Privacy */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <AlertCircle className="w-6 h-6 text-red-600" />
            Children's Privacy
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
              <p className="text-red-800 font-medium">
                Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13.
              </p>
            </div>
            <p>
              If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove that information from Our servers.
            </p>
            <p>
              If We need to rely on consent as a legal basis for processing Your information and Your country requires consent from a parent, We may require Your parent's consent before We collect and use that information.
            </p>
          </div>
        </section>

        {/* Links to Other Websites */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Links to Other Websites</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit.
            </p>
            <p>
              We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.
            </p>
          </div>
        </section>

        {/* Changes to this Privacy Policy */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to this Privacy Policy</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.
            </p>
            <p>
              We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the "Last updated" date at the top of this Privacy Policy.
            </p>
            <p>
              You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
            </p>
          </div>
        </section>

        {/* Contact Us */}
        <section className="bg-gray-50 p-6 rounded-lg border">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-700 mb-4">
            If you have any questions about this Privacy Policy, You can contact us:
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
              <Mail className="w-4 h-4" />
              <a href="mailto:info@piumino.in" className="underline">
                info@piumino.in
              </a>
            </div>
            <div className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
              <Globe className="w-4 h-4" />
              <a href="https://www.piumino.in" className="underline">
                www.piumino.in
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      
    </div>
    </>
  );
};

export default PrivacyPolicy;