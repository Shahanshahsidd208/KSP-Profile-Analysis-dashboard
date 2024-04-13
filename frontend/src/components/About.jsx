import React from 'react';

export default function About({ language }) {
  return (
    <div className="bg-orange-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-red-900 mb-6">
          {language === 'english' ? 'About Us' : 'ನಮ್ಮ ಬಗ್ಗೆ'}
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          {language === 'english' ?
            'Welcome to our platform! We are a dedicated team passionate about leveraging technology to enhance policing operations and improve public safety. Our mission is to provide law enforcement professionals with powerful tools and resources to analyze performance, manage data, and optimize resource allocation.' :
            'ನಮ್ಮ  ತಂಡಕ್ಕೆ  ಸ್ವಾಗತ!  ನಾವು  ಪೊಲೀಸಿಂಗ್  ಕಾರ್ಯಾಚರಣೆಯನ್ನು  ಮೆಚ್ಚಿಕೊಳ್ಳುವಲ್ಲಿ  ತಂತ್ರಾಂಶವನ್ನು  ಬಳಸುವುದರ  ಬಗ್ಗೆ  ಉತ್ಸಾಹದಿಂದ  ಕಾರ್ಯನಿರ್ವಹಣೆಯನ್ನು  ಮೆಚ್ಚಿಕೊಳ್ಳುವವರಾಗಿದ್ದೇವೆ  ಮತ್ತು ಸಾರ್ವಜನಿಕ ಸುರಕ್ಷತೆಯನ್ನು ಸುಧಾರಿಸಲು ಬಳಸುವುದರ ಬಗ್ಗೆ. ನಮ್ಮ ಧ್ಯೇಯವು ಕಾನೂನು ಸೇವಕರಿಗೆ ಪ್ರದರ್ಶನ ವಿಶ್ಲೇಷಣೆ, ಡೇಟಾ ನಿರ್ವಹಣೆ ಮತ್ತು ಸಂಪನ್ಮೂಲ ನಿಯೋಜನೆಯನ್ನು ವಿಶ್ಲೇಷಿಸಲು ಶಕ್ತಿಶಾಲಿ ಉಪಕರಣಗಳು ಮತ್ತು ಸಾಧನಗಳನ್ನು ಒದಗಿಸುವುದು.'}
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          {language === 'english' ?
            'Our user-friendly dashboard offers comprehensive insights and visualizations, empowering officers at all levels to make informed decisions and drive positive change within their communities. Whether you\'re a frontline officer seeking to analyze your performance or an administrator tasked with data management, our platform has you covered.' :
            'ನಮ್ಮ ಬಳಕೆದಾರ ಸ್ವರೂಪಿ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್‌ನಲ್ಲಿ ವಿಶ್ವಸ್ತತೆಯ ಹೊಂದಿಕೊಳ್ಳುವ ನಿರ್ವಹಣೆಗಳು ಮತ್ತು ವಿಜುಯಗಳ ಸಾರ್ವಜನಿಕಗೊಳಿಸುವುದರ ಮೂಲಕ, ನಿಮ್ಮ ಸಮುದಾಯದಲ್ಲಿ ನಿರ್ಣಯಗಳನ್ನು ಕ್ರಮಬದ್ಧವಾಗಿ ತೆರೆಯುವುದಕ್ಕೂ ಅಧಿಕಾರಿಗಳನ್ನು ಪ್ರೇರಿತಗೊಳಿಸುವ ಅಧಿಕಾರವಿದೆ. ನೀವು ನಿಮ್ಮ ಪ್ರದರ್ಶನವನ್ನು ವಿಶ್ಲೇಷಿಸಲು ಬಯಸುವ ಮುಂಚೆ ಸಾಮರ್ಥ್ಯದ ಮುಖ್ಯಸ್ಥರೂ, ಡೇಟಾ ನಿರ್ವಹಣೆಯನ್ನು ನಿರ್ವಹಿಸುವವರೂ ಆಗಿರಿದ್ದರೂ, ನಮ್ಮ ಪ್ಲಾಟ್‌ಫಾರಿಂಗ್‌ನಲ್ಲಿ ನೀವು ಕವರ್ ಮಾಡಲ್ಪಡುತ್ತಿದ್ದೀರಿ.'}
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          {language === 'english' ?
            'We are committed to maintaining the hierarchical structure of the police system, ensuring that each role, from Police Inspectors to Assistant Commissioners of Police, has access to the tools they need to succeed. With a focus on efficiency, accuracy, and transparency, we strive to support law enforcement agencies in their mission to serve and protect.' :
            'ನಾವು ಪೊಲೀಸ್ ವ್ಯವಸ್ಥೆಯ ಹಂಚಿಕೆಯ ಘಟನೆಯನ್ನು ಉಳಿಸಲು ಬದ್ದರಿದ್ದೇವೆ, ಪೊಲೀಸ್ ಇನ್ಸ್ಪೆಕ್ಟರ್‌ಗಳಿಂದ ಸಹಾಯಕ ಕಮಿಷನರ್‌ಗಳವರೆಗೆ ಪ್ರತಿ ಪಾತ್ರವು ಅವರು ಯಶಸ್ವಿಯಾಗಲು ಅವರಿಗೆ ಬೇಕಾದ ಉಪಕರಣಗಳಿಗೆ ಪ್ರವೇಶವನ್ನು ಖಂಡಿಸುವುದನ್ನು ಖಂಡಿಸುತ್ತೇವೆ. ದೃಢತೆ, ಸಾಟಿ, ಮತ್ತು ಪಾರದರ್ಶಕತೆಯ ಮೇಲೆ ಗಮನವಿಟ್ಟು, ನಾವು ಪೊಲೀಸ್ ವ್ಯವಸ್ಥೆಗಳನ್ನು ತಮ್ಮ ಕಾರ್ಯವನ್ನು ಸಾರ್ವಜನಿಕ ಮತ್ತು ರಕ್ಷಣೆ ಮಾಡುವ ಮಹತ್ವದ ಕಾರ್ಯದಲ್ಲಿ ಬೆಂಬಲಿಸಲು ಪ್ರಯತ್ನಿಸುತ್ತೇವೆ.'}
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          {language === 'english' ?
            'Thank you for choosing our platform. We look forward to partnering with you to create safer and more secure communities.' :
            'ನಮ್ಮ ಪ್ಲಾಟ್‌ಫಾರಿಂಗ್ ಆಯ್ಕೆ ಮಾಡಿದಿರಿದ್ದರೆ ಧನ್ಯವಾದಗಳು. ನಾವು ನಿಮ್ಮೊಡನೆ ಸುರಕ್ಷಿತ ಮತ್ತು ಸ್ಥಿರ ಸಮುದಾಯಗಳನ್ನು ರಚಿಸಲು ಸಂತ್ರಿಸುತ್ತೇವೆ.'
          }
        </p>
      </div>
    </div>
  );
}


