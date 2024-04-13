import React from 'react';

export default function Contact({ language }) {
  return (
    <div className="bg-orange-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-red-900 mb-6">
          {language === 'english' ? 'Contact Us' : 'ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ'}
        </h2>
        <div className="bg-red-900 shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg font-semibold leading-6 text-orange-100">
              {language === 'english' ? 'Karnataka State Police Headquarters' : 'ಕರ್ನಾಟಕ ರಾಜ್ಯ ಪೊಲೀಸ್ ಮುಖ್ಯಾಲಯ'}
            </h3>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-red-800">
                  {language === 'english' ? 'Address' : 'ವಿಳಾಸ'}
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 ">
                  {language === 'english' ? 'Director-General & Inspector General of Police, Karnataka State Police Headquarters, No.2, Nrupathunga Road, Bangalore 560-001 Karnataka' : 'ಪೊಲೀಸ್ ಇನ್ಸ್ಪೆಕ್ಟರ್ ಜನರಲ್ & ಡೈರೆಕ್ಟರ್-ಜನರಲ್, ಕರ್ನಾಟಕ ರಾಜ್ಯ ಪೊಲೀಸ್ ಮುಖ್ಯಾಲಯ, ನಾಂಬರ್ 2, ನೃಪತುಂಗ ರಸ್ತೆ, ಬೆಂಗಳೂರು 560-001 ಕರ್ನಾಟಕ'}
                </dd>
              </div>
              <div className="bg-gray-300 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-red-800">{language === 'english' ? 'Phone' : 'ಫೋನ್'}</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">080-22942111 , 080-22942777, 080-22215911(F)</dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-red-800">{language === 'english' ? 'Email' : 'ಇಮೇಲ್'}</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">police_ksp@gov.in</dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="mt-8">
          <p className="text-lg text-black">
            {language === 'english' ? 'For inquiries, feedback, or assistance, please feel free to contact us using the information provided above. We are here to help!' : 'ಪ್ರಶ್ನೆಗಳು, ಪ್ರತಿಕ್ರಿಯೆಗಳು, ಅಥವಾ ಸಹಾಯಕ್ಕಾಗಿ, ಮೇಲೆ ನೀಡಿದ ಮಾಹಿತಿಯನ್ನು ಬಳಸಿ ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ. ನಾವು ನಿಮಗೆ ಸಹಾಯ ಮಾಡಲು ಇಲ್ಲಿದ್ದೇವೆ!'}
          </p>
        </div>
      </div>
    </div>
  );
}
