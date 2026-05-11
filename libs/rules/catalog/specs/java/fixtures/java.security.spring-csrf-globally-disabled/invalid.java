import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

class SecurityConfig {
  @Bean
  SecurityFilterChain web(HttpSecurity http) throws Exception {
    return http.csrf(csrf -> csrf.disable()).authorizeHttpRequests(auth -> auth.anyRequest().authenticated()).build();
  }
}
