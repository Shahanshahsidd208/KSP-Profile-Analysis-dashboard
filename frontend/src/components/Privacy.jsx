// PrivacyPolicy.js

import React from 'react';

const Privacy = ({ language }) => {
  return (
    <div className="bg-orange-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-red-900 mb-6">{language === 'english' ? 'Privacy Policy' : 'ಗೌಪ್ಯತೆ ನಿಯಮಗಳು'}</h2>
        <div className="bg-red-900 shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <p className="text-lg text-orange-100">{language === 'english' ? 'Your privacy is important to us. This Privacy Policy explains how we collect, use, and disclose your personal information.' : 'ನಿಮ್ಮ ಗೌಪ್ಯತೆ ನಮಗೆ ಮುಖ್ಯವಾಗಿದೆ. ಈ ಗೌಪ್ಯತೆ ನಿಯಮಗಳು ನಿಮ್ಮ ವೈಯಕ್ತಿಕ ಮಾಹಿತಿಯನ್ನು ನಾವು ಹೇಗೆ ಸಂಗ್ರಹಿಸುವುದು, ಬಳಸುವುದು ಮತ್ತು ಬಿಡುಗಡೆ ಮಾಡುವುದನ್ನು ವಿವರಿಸುತ್ತದೆ.'}</p>
          </div>
          <div className="border-t border-gray-200">
            <dl className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 bg-white">
              <dt className="text-sm font-medium text-red-800">{language === 'english' ? 'Information We Collect' : 'ನಾವು ಸಂಗ್ರಹಿಸುವ ಮಾಹಿತಿ'}</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                {language === 'english' ? 'We collect information you provide directly to us, such as your name and email address when you contact us.' : 'ನೀವು ನಮಗೆ ಸಂಪರ್ಕಿಸುವಾಗ ನೀವು ನಮಗೆ ನೀಡುವ ಹೆಸರು ಮತ್ತು ಇಮೇಲ್ ವಿಳಾಸ ಹೀಗೆ ನಾವು ನಿಮಗೆ ಸಂಬಂಧಿಸಿದ ಮಾಹಿತಿಯನ್ನು ಸಂಗ್ರಹಿಸುತ್ತೇವೆ.'}
              </dd>
            </dl>
            <dl className="bg-gray-300 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-red-800">{language === 'english' ? 'How We Use Your Information' : 'ನಿಮ್ಮ ಮಾಹಿತಿಯನ್ನು ನಾವು ಹೇಗೆ ಬಳಸುತ್ತೇವೆ'}</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                {language === 'english' ? 'We use the information we collect to provide, maintain, and improve our services, and to respond to your inquiries or requests.' : 'ನಾವು ಸಂಗ್ರಹಿಸುವ ಮಾಹಿತಿಯನ್ನು ನಾವು ನಿಮಗೆ ಸೇವೆ ಮಾಡಲು, ರಕ್ಷಿಸಲು ಮತ್ತು ಸುಧಾರಿಸಲು ಬಳಸುತ್ತೇವೆ, ಮತ್ತು ನಿಮ್ಮ ಪ್ರಶ್ನೆಗಳಿಗೆ ಅಥವಾ ಅಭ್ಯರ್ಥನೆಗಳಿಗೆ ಉತ್ತರಿಸಲು.'}
              </dd>
            </dl>
            <dl className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 bg-white">
              <dt className="text-sm font-medium text-red-800">{language === 'english' ? 'Information Sharing' : 'ಮಾಹಿತಿ ಹಂಚಿಕೆ'}</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
              {language === 'english' ? 'We do not share your personal information with third parties, except as required by law or with your consent.' : 'ನಾವು ನಿಮ್ಮ ವೈಯಕ್ತಿಕ ಮಾಹಿತಿಯನ್ನು ನ್ಯಾಯಬದ್ಧವಾಗಿ ಅಗುಹಿಸುವುದಿಲ್ಲ, ಬದಲಾಗಿ ನಿಮ್ಮ ಅನುಮತಿಯಿಂದ ಅಥವಾ ನ್ಯಾಯದ ಆವಶ್ಯಕತೆಯಿಂದ ಹೊರಗಿನ ಮೂರನೆಯ ಪಕ್ಷಗಳಿಗೆ ಹಂಚಿಕೆ ಮಾಡುತ್ತೇವೆ.'}
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Privacy;

