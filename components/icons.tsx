import { siteConfig } from '@/config/site'
import { LucideProps, MessageSquare, User } from 'lucide-react'

export const Icons = {
    user: User,
    logo: (props: LucideProps) => (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 12 10" fill="none">
            <path d="M5.26696 3.00003C5.24423 2.71594 5.1377 2.49435 4.94735 2.33526C4.75985 2.17617 4.47434 2.09662 4.09082 2.09662C3.8465 2.09662 3.64622 2.12645 3.48997 2.18611C3.33656 2.24293 3.22292 2.32106 3.14906 2.42049C3.0752 2.51992 3.03684 2.63356 3.034 2.7614C3.02832 2.86651 3.04679 2.96168 3.0894 3.04691C3.13485 3.12929 3.20588 3.20458 3.30247 3.27276C3.39906 3.3381 3.52264 3.39776 3.67321 3.45174C3.82378 3.50572 4.00275 3.55401 4.21014 3.59662L4.92605 3.75003C5.409 3.85231 5.82235 3.98725 6.1661 4.15486C6.50985 4.32248 6.7911 4.51992 7.00985 4.74719C7.2286 4.97162 7.38912 5.22447 7.49139 5.50572C7.5965 5.78697 7.65048 6.09378 7.65332 6.42617C7.65048 7.00003 7.50701 7.48583 7.22292 7.88356C6.93883 8.28128 6.53258 8.58384 6.00417 8.79123C5.4786 8.99861 4.8465 9.10231 4.10787 9.10231C3.34934 9.10231 2.68741 8.99009 2.12207 8.76566C1.55957 8.54123 1.12207 8.19606 0.80957 7.73015C0.499911 7.2614 0.343661 6.66197 0.34082 5.93185H2.59082C2.60502 6.1989 2.67179 6.42333 2.7911 6.60515C2.91042 6.78697 3.07804 6.92475 3.29395 7.0185C3.5127 7.11225 3.77264 7.15912 4.07378 7.15912C4.32662 7.15912 4.53826 7.12787 4.70872 7.06537C4.87917 7.00287 5.00843 6.91623 5.0965 6.80543C5.18457 6.69464 5.23002 6.56822 5.23287 6.42617C5.23002 6.29265 5.18599 6.17617 5.10076 6.07674C5.01838 5.97447 4.88201 5.88356 4.69167 5.80401C4.50133 5.72162 4.24423 5.64492 3.92037 5.5739L3.05105 5.3864C2.27832 5.21878 1.66895 4.93895 1.22292 4.54691C0.779741 4.15202 0.55957 3.61367 0.562411 2.93185C0.55957 2.37787 0.707298 1.8935 1.00559 1.47873C1.30673 1.06111 1.72292 0.735829 2.25417 0.502874C2.78826 0.26992 3.40048 0.153442 4.09082 0.153442C4.79537 0.153442 5.40474 0.27134 5.91895 0.507136C6.43315 0.742931 6.82946 1.07532 7.10787 1.5043C7.38912 1.93043 7.53116 2.42901 7.534 3.00003H5.26696Z" fill="black" />
            <path d="M9.8671 9.1364C9.53755 9.1364 9.25488 9.02134 9.01909 8.79123C8.78613 8.55827 8.67108 8.2756 8.67392 7.94322C8.67108 7.61935 8.78613 7.34236 9.01909 7.11225C9.25488 6.88214 9.53755 6.76708 9.8671 6.76708C10.1796 6.76708 10.4552 6.88214 10.6938 7.11225C10.9353 7.34236 11.0574 7.61935 11.0603 7.94322C11.0574 8.16481 10.9992 8.36651 10.8856 8.54833C10.7748 8.72731 10.6299 8.87077 10.4509 8.97873C10.2719 9.08384 10.0773 9.1364 9.8671 9.1364Z" fill="black" />
        </svg>
    ),
    google: (props: LucideProps) => (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M19.9885 9.20475H19.2502V9.16671H11.0002V12.8334H16.1807C15.4249 14.9678 13.394 16.5 11.0002 16.5C7.96279 16.5 5.50016 14.0374 5.50016 11C5.50016 7.96267 7.96279 5.50004 11.0002 5.50004C12.4022 5.50004 13.6777 6.02896 14.649 6.89292L17.2417 4.30012C15.6046 2.77433 13.4147 1.83337 11.0002 1.83337C5.93787 1.83337 1.8335 5.93775 1.8335 11C1.8335 16.0623 5.93787 20.1667 11.0002 20.1667C16.0625 20.1667 20.1668 16.0623 20.1668 11C20.1668 10.3854 20.1036 9.78546 19.9885 9.20475Z" fill="#FFC107" />
            <path d="M2.89014 6.73342L5.90184 8.94212C6.71676 6.92454 8.69035 5.50004 10.9999 5.50004C12.4019 5.50004 13.6775 6.02896 14.6487 6.89292L17.2415 4.30012C15.6043 2.77433 13.4144 1.83337 10.9999 1.83337C7.47897 1.83337 4.42555 3.82117 2.89014 6.73342Z" fill="#FF3D00" />
            <path d="M11 20.1666C13.3677 20.1666 15.5191 19.2605 17.1458 17.7869L14.3087 15.3862C13.3574 16.1096 12.1951 16.5009 11 16.4999C8.61573 16.4999 6.59127 14.9797 5.82861 12.858L2.83936 15.1612C4.35644 18.1298 7.43736 20.1666 11 20.1666Z" fill="#4CAF50" />
            <path d="M19.9884 9.20467H19.25V9.16663H11V12.8333H16.1805C15.819 13.8491 15.1678 14.7368 14.3073 15.3867L14.3087 15.3858L17.1458 17.7865C16.945 17.9689 20.1667 15.5833 20.1667 11C20.1667 10.3853 20.1034 9.78538 19.9884 9.20467Z" fill="#1976D2" />
        </svg>
    ),
    commentReply: MessageSquare,
}