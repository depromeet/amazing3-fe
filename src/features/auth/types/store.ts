/**
 * Auth 관련 상태 업데이트 actions
 */
export interface AuthActionsProps {
  /**
   * 로그인 되어있는지 여부를 설정하는 함수
   */
  setIsSignedIn: (value: boolean) => void;
  /**
   * 토큰이 필요한지 여부를 설정하는 함수
   */
  setIsTokenRequired: (value: boolean) => void;
  /**
   * 토큰 관련 요청이 진행 중인지 여부를 설정하는 함수
   */
  setIsRequesting: (value: boolean) => void;
}

/**
 * Auth 관련 jotai state
 */
export interface AuthStateProps {
  /**
   * 토큰이 필요한지 여부
   */
  isTokenRequired: boolean;
  /**
   * 로그인 되어있는지 여부
   */
  isLoggedIn: boolean;
  /**
   * 토큰 관련 요청이 진행 중인지 여부 (스피너 출력)
   */
  isRequesting: boolean;
}
