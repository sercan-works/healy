"use client"
import { useState, FormEvent } from 'react';

const AnalizForm = () => {
  const [formData, setFormData] = useState({
    adSoyad: '',
    dogumTarihi: '',
    dogumYeri: '',
    yasadigiSehir: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    const message = `Yeni Form Bilgileri:%0A
    Adı Soyadı: ${formData.adSoyad}%0A
    Doğum Tarihi: ${formData.dogumTarihi}%0A
    Doğum Yeri: ${formData.dogumYeri}%0A
    Yaşadığı Şehir: ${formData.yasadigiSehir}`;
    
    const phoneNumber = '905516926848';
    
    window.open(`https://wa.me/${phoneNumber}?text=${message}`);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="max-w-md mx-auto my-8 p-6 bg-white rounded-lg shadow-lg text-center">
        <h2 className="text-xl font-bold text-green-600 mb-2">
          BİLGİLERİNİZ TARAFIMIZA ULAŞMIŞTIR
        </h2>
        <p className="text-gray-700">
          EN KISA ZAMANDA DÖNÜŞ SAĞLANACAKTIR.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
            <h2 className='text-center text-2xl font-bold text-green-600 mb-2'>ÜCRETSİZ ANALİZ FORMU</h2>
          <label className="block text-gray-700 mb-2">Adı Soyadı:</label>
          <input
            type="text"
            value={formData.adSoyad}
            onChange={(e) => setFormData({...formData, adSoyad: e.target.value})}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Doğum Tarihi:</label>
          <input
            type="date"
            value={formData.dogumTarihi}
            onChange={(e) => setFormData({...formData, dogumTarihi: e.target.value})}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Doğum Yeri:</label>
          <input
            type="text"
            value={formData.dogumYeri}
            onChange={(e) => setFormData({...formData, dogumYeri: e.target.value})}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Yaşadığı Şehir:</label>
          <input
            type="text"
            value={formData.yasadigiSehir}
            onChange={(e) => setFormData({...formData, yasadigiSehir: e.target.value})}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <button 
          type="submit"
          className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
        >
          ANALİZ İÇİN BİLGİLERİ GÖNDER
        </button>
        <p className='text-center text-gray-700'>
            * Bilgileriniz Whatsapp aracılığıyla tarafımıza gönderilecektir.<br />
            * Eğer formu doldurmadan göndermek istemiyor ve ön bilgi almak istiyorsanız <a target='_blank' href="https://wa.me/905516926848" className='text-green-600 font-bold'>Whatsapp</a> adresimizi ziyaret edebilirsiniz.

        </p>
      </form>
    </div>
  );
};

export default AnalizForm;
