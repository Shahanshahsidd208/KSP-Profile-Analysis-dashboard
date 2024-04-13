import React from 'react';

const Terms = ({ language }) => {
  return (
    <div className="bg-orange-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-red-900 mb-6">
          {language === 'english' ? 'Terms & Conditions' : 'ನಿಯಮಗಳು ಮತ್ತು ಷರತ್ತುಗಳು'}
        </h2>
        <div className="bg-red-900 shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <p className="text-lg text-orange-100">
              {language === 'english' ? 'These Terms & Conditions govern your use of our services. By using our services, you agree to these terms.' : 'ಈ ನಿಯಮಗಳು ಮತ್ತು ಷರತ್ತುಗಳು ನಮ್ಮ ಸೇವೆಗಳ ಬಳಕೆಯನ್ನು ನಿಯಂತ್ರಿಸುತ್ತವೆ. ನಮ್ಮ ಸೇವೆಗಳನ್ನು ಬಳಸುವುದರಿಂದ, ನೀವು ಈ ನಿಯಮಗಳನ್ನು ಒಪ್ಪುತ್ತೀರಿ.'}
            </p>
          </div>
          <div className="border-t border-gray-200">
            <dl className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 bg-white">
              <dt className="text-sm font-medium text-red-800">
                {language === 'english' ? 'Acceptance of Terms' : 'ನಿಯಮಗಳ ಒಪ್ಪಿಗೆ'}
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                {language === 'english' ? 'By accessing or using our services, you agree to be bound by these Terms & Conditions and our Privacy Policy.' : 'ನಮ್ಮ ಸೇವೆಗಳನ್ನು ಲಭ್ಯಮಾಡುವುದು ಅಥವಾ ಬಳಸುವುದರಿಂದ, ನೀವು ಈ ನಿಯಮಗಳಿಗೆ ಮತ್ತು ನಮ್ಮ ಗೌಪ್ಯತೆ ನೀತಿಗೆ ಬಂಧಿತರಾಗುತ್ತೀರಿ.'}
              </dd>
            </dl>
            <dl className="bg-gray-300 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-red-800">{language === 'english' ? 'User Conduct' : 'ಬಳಕೆದಾರ ನಡವಳಿಕೆ'}</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                {language === 'english' ? 'You agree not to engage in any prohibited activities or conduct that violates these Terms & Conditions.' : 'ನೀವು ಯಾವುದೇ ನಿಷಿದ್ಧ ಕ್ರಿಯೆಗಳಲ್ಲಿ ಸಂಚರಿಸುವುದನ್ನು ಅಥವಾ ಈ ನಿಯಮಗಳನ್ನು ಲಂಘಿಸುವ ಬಾಾದ್ಯವಾಗಿ ಒಪ್ಪುವಂತಾಗಿದ್ದರೆ ಒಪ್ಪುತ್ತೀರಿ.'}
</dd>
</dl>
<dl className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 bg-white">
<dt className="text-sm font-medium text-red-800">
{language === 'english' ? 'Changes to Terms' : 'ನಿಯಮಗಳ ಬದಲಾವಣೆಗಳು'}
</dt>
<dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
{language === 'english' ? 'We reserve the right to modify or update these Terms & Conditions at any time without prior notice.' : 'ನಾವು ಮುಂಚೆಯೇ ಎಚ್ಚರಿಕೆ ಇಲ್ಲದೇ ಈ ನಿಯಮಗಳನ್ನು ಯಾವಾಗಲೂ ಬದಲಾಯಿಸುವ ಅಥವಾ ನವೀಕರಿಸುವ ಹಕ್ಕುಗಳನ್ನು ಉಳಿಸುತ್ತೇವೆ.'}
</dd>
</dl>
</div>
</div>
</div>
</div>
);
}

export default Terms;
