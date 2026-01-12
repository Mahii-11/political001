const LogoBnp = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto flex flex-col  items-center gap-8 px-4 md:px-0">
        <div className="flex-shrink-0  w-32 ">
          <img
            src="/images/bnpflag.jpg"
            alt="BNP Logo"
            className="w-full h-auto object-contain rounded-lg shadow-md"
          />
        </div>

        <div className="w-full md:w-3/4 text-center md:text-left">
          <p className="text-gray-800 text-base md:text-lg leading-7 md:leading-8">
            বাংলাদেশ জাতীয়তাবাদী দল (বিএনপি) ১ সেপ্টেম্বর ১৯৭৮ সালে প্রতিষ্ঠিত
            হয়েছিল। এটি বাংলাদেশী জাতীয়তাবাদের ওপর ভিত্তি করে গঠিত, একটি
            মতাদর্শ যা বাংলাদেশের সকল নাগরিকের অধিকার স্বীকার করে, তাদের জাতি,
            লিঙ্গ বা সম্প্রদায় নির্বিশেষে।
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogoBnp;
