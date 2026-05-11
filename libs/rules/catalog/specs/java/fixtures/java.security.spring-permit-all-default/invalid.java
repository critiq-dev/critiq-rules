import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

class SecurityConfig {
  @Bean
  SecurityFilterChain web(HttpSecurity http) throws Exception {
    return http.authorizeHttpRequests(auth -> auth.anyRequest().permitAll()).build();
  }
}
