import { StyleSheet, Text, View, TouchableOpacity  } from 'react-native';
import Axios from 'axios';
import Ionicons from '@expo/vector-icons/Ionicons';

const CardTasks = ({Title, Description, IdTask, onpress}) => {
  
    return(
        <TouchableOpacity style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>{Title}</Text>
                <Text style={styles.description}>{Description}</Text>
            </View>
            <TouchableOpacity style={styles.iconDelete} onPress={onpress}>
              <Ionicons name="trash" size={32} color="green" />
            </TouchableOpacity>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 80,
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#29323C',
    flexDirection: 'row',
    alignItems: 'center'
  },
  card: {
    gap: 5,
    marginLeft: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: 500,
    color: '#FFFFFF'
  },
  description: {
    fontSize: 14,
    color: '#FFFFFF',
    opacity: 0.5
  },
  iconDelete: {
    marginRight: 30
  }
});

export default CardTasks