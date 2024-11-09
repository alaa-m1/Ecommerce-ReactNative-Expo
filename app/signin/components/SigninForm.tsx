import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput, Button, HelperText } from 'react-native-paper';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'expo-router';
import { useAuth } from '@/context/AuthContext';

const schema = z.object({
  username: z.string().min(3, { message: 'Username must be at least 3 characters long' }),
  password: z.string().min(8, { message: 'Password must be at least 8 characters long' }),
});

type FormData = z.infer<typeof schema>;

const SignInForm = () => {
  const { signIn } = useAuth();
  const router = useRouter();
  const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Here you would typically validate the credentials with your backend
    // For this example, we'll just sign in immediately
    signIn();
    router.back();
  };

  return (
    <View>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Username"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            error={!!errors.username}
          />
        )}
        name="username"
      />
      <HelperText type="error" visible={!!errors.username}>
        {errors.username?.message}
      </HelperText>

      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Password"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            secureTextEntry
            error={!!errors.password}
          />
        )}
        name="password"
      />
      <HelperText type="error" visible={!!errors.password}>
        {errors.password?.message}
      </HelperText>

      <Button mode="contained" onPress={handleSubmit(onSubmit)} style={styles.button}>
        Sign In
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 16,
  },
});

export default SignInForm;