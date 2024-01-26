import { useState, ChangeEvent, FormEvent } from 'react';

import styles from './sign-up-form.module.css';

type SignUpFormState = {
  name: string;
  platform: string;
  email: string;
  isEmailValid: boolean;
};

export const SignUpForm = () => {
  const [formData, setFormData] = useState<SignUpFormState>({
    name: '',
    platform: 'telegram',
    email: '',
    isEmailValid: true,
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value.trim(),
    }));
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const isEmailValid = validateEmail(formData.email);
    setFormData(prevData => ({
      ...prevData,
      isEmailValid,
    }));

    if (isEmailValid) {
      console.log('Name:', formData.name);
      console.log('Platform:', formData.platform);
      console.log('Email:', formData.email);
      setFormData({
        name: '',
        platform: 'telegram',
        email: '',
        isEmailValid: true,
      });
    }
  };

  return (
    <div className={styles.signUpWrap}>
      <div className={styles.title}>Условия работы и стоимость:</div>
      <div className={styles.signUp}>
        <div className={styles.textBlock}>
          <div>/консультация проводится индивидуально в онлайн формате /</div>
          <div>Длительность : 50 минут</div>
          <div>Стоимость : 50,00 BYN</div>
        </div>
        <form onSubmit={handleSubmit} className={styles.signUpForm}>
          <div>
            <label className={styles.label} htmlFor='nameField'>
              Имя:
            </label>
            <input
              type='text'
              id='nameField'
              name='name'
              value={formData.name}
              onChange={handleInputChange}
              className={styles.input}
              required
            />
          </div>
          <div>
            <label className={styles.label} htmlFor='platformSelect'>
              Предподчительный способ связи:
            </label>
            <select
              id='platformSelect'
              name='platform'
              value={formData.platform}
              onChange={handleInputChange}
              className={styles.input}
            >
              <option value='telegram'>Telegram</option>
              <option value='zoom'>Zoom</option>
              <option value='skype'>Skype</option>
            </select>
          </div>
          <div>
            <label className={styles.label} htmlFor='emailField'>
              Email:
            </label>
            <input
              type='email'
              id='emailField'
              name='email'
              value={formData.email}
              onChange={handleInputChange}
              className={styles.input}
            />
            {!formData.isEmailValid && (
              <p style={{ color: 'red' }}>Please enter a valid email address.</p>
            )}
          </div>
          <button className={styles.signUpButton} type='submit'>
            Записаться
          </button>
        </form>
      </div>
    </div>
  );
};
